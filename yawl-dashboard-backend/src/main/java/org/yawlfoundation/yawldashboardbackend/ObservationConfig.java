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
package org.yawlfoundation.yawldashboardbackend;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.yawlfoundation.yawldashboardbackend.notifications.NotificationStoreService;
import org.yawlfoundation.yawldashboardbackend.observer.CaseWithoutWorkItemsObserver;
import org.yawlfoundation.yawldashboardbackend.observation.ObservationRunner;
import org.yawlfoundation.yawldashboardbackend.observation.ObservationSchedule;
import org.yawlfoundation.yawldashboardbackend.observation.ObserverRegistry;
import org.yawlfoundation.yawldashboardbackend.observer.OldCaseObserver;
import org.yawlfoundation.yawldashboardbackend.observer.OldWorkItemObserver;
import org.yawlfoundation.yawldashboardbackend.observer.ParticipantAcceptedTooManyObserver;
import org.yawlfoundation.yawldashboardbackend.observer.TimerRunsOutObserver;
import org.yawlfoundation.yawldashboardbackend.observer.UnofferedWorkItemsObserver;
import org.yawlfoundation.yawldashboardbackend.dao.ObservationDao;



/**
 * The configuration for observers and notifications.
 * @author Philipp R. Thomas <philipp.thomas@floaz.de>
 */
@Configuration
class ObservationConfig {

	@Autowired
	private ObservationDao observationDao;

	private final ObjectMapper objectMapper = new ObjectMapper();

	@Autowired
	protected  NotificationStoreService notificationStoreService;

	@Bean
	protected ObserverRegistry observerRegistry() {
		ObserverRegistry registry = new ObserverRegistry();
		registry.registerObserver(caseWithoutWorkItemsObserver());
		registry.registerObserver(unofferedWorkItemsObserver());
		registry.registerObserver(oldWorkItemObserver());
		registry.registerObserver(participantAcceptedTooManyObserver());
		registry.registerObserver(timerRunsOutObserver());
		//registry.registerObserver(oldCaseObserver()); <-- Not finished
		return registry;
	}


	@Bean
	protected CaseWithoutWorkItemsObserver caseWithoutWorkItemsObserver() {
		return new CaseWithoutWorkItemsObserver();
	}


	@Bean
	protected UnofferedWorkItemsObserver unofferedWorkItemsObserver() {
		return new UnofferedWorkItemsObserver();
	}


	@Bean
	protected OldWorkItemObserver oldWorkItemObserver() {
		return new OldWorkItemObserver();
	}


	@Bean
	protected ParticipantAcceptedTooManyObserver participantAcceptedTooManyObserver() {
		return new ParticipantAcceptedTooManyObserver();
	}


	@Bean
	protected TimerRunsOutObserver timerRunsOutObserver() {
		return new TimerRunsOutObserver();
	}


	@Bean
	protected OldCaseObserver oldCaseObserver() {
		return new OldCaseObserver();
	}



	@Bean
	protected ObservationRunner observationCheckRunner() {
		return new ObservationRunner(observerRegistry(), observationDao, objectMapper);
	}


	@Bean
	protected ObservationSchedule observationCheckSchedule() {
		return new ObservationSchedule(observationCheckRunner());
	}

}
