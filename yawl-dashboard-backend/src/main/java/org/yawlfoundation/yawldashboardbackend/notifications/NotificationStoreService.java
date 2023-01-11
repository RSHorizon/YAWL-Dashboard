/*
 * Copyright (c) 2004-2012 The YAWL Foundation. All rights reserved.
 * The YAWL Foundation is a collaboration of individuals and
 * organisations who are committed to improving workflow technology.
 *
 * This file is part of YAWL. YAWL is free software: you can
 * redistribute it and/or modify it under the terms of the GNU Lesser
 * General Public License as published by the Free Software Foundation.
 *
 * YAWL is distributed in the hope that it will be useful, but WITHOUT
 * ANY WARRANTY; without even the implied warranty of MERCHANTABILITY
 * or FITNESS FOR A PARTICULAR PURPOSE. See the GNU Lesser General
 * Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public
 * License along with YAWL. If not, see <http://www.gnu.org/licenses/>.
 */
package org.yawlfoundation.yawldashboardbackend.notifications;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;
import org.springframework.beans.factory.annotation.Autowired;
import org.yawlfoundation.yawldashboardbackend.dao.NotificationDao;
import org.yawlfoundation.yawldashboardbackend.model.Notification;
import org.yawlfoundation.yawldashboardbackend.model.Observation;
import org.yawlfoundation.yawldashboardbackend.dao.ObservationDao;



/**
 * NotificationStoreService.
 * @author Philipp R. Thomas <philipp.thomas@floaz.de>
 */
public class NotificationStoreService {

	@Autowired
	private NotificationDao notificationDao;

	@Autowired
	private ObservationDao observationDao;

	private final ObjectMapper objectMapper = new ObjectMapper();


	public List<Notification> getAllActiveNotifications() {
		return notificationDao.findByStatus(Notification.STATUS_ACTIVE)
									.stream()
									.map((t) -> t)
									.collect(Collectors.toList());
	}


	public List<Notification> getNotificationsByObservation(String observationId) {
		return notificationDao.findByObservation_Id(observationId);
	}


	public Notification createNewNotification(String observationId, String title, String priority, JsonNode data) {
		Optional<Observation> optObservation = observationDao.findById(observationId);
		if(optObservation.isEmpty()){
			throw new RuntimeException("Observation not found");
		}
		Observation observation = optObservation.get();

		Notification notification = new Notification();
		notification.setObservation(observation);
		notification.setStatus(Notification.STATUS_ACTIVE);
		notification.setTitle(title);
		notification.setPriority(priority);
		notification.setDelayDate(null);
		notification.setCreationDate(LocalDateTime.now());

		try {
			notification.setData(objectMapper.writeValueAsBytes(data));
		}
		catch(JsonProcessingException e) {
			throw new RuntimeException("Could not store notification metadata.");
		}

		notificationDao.save(notification);
		return notification;
	}


	public void removeAllNotificationsByObservation(String observationId) {
		List<Notification> notifications = notificationDao.findByObservation_Id(observationId);
		notificationDao.deleteAll(notifications);
	}

}
