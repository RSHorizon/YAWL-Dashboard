package org.yawlfoundation.yawldashboardbackend.endpoint;

import org.yawlfoundation.yawl.engine.YSpecificationID;
import org.yawlfoundation.yawldashboardbackend.model.ExtensionSpecification;
import org.yawlfoundation.yawldashboardbackend.model.ExtensionTask;
import org.yawlfoundation.yawldashboardbackend.yawlclient.model.Task;

import java.util.*;

public class StatisticControllerHelper {

    protected static boolean decompositionOrderIsSmaller(String order, String order2) {
        if (order2.equals("")) {
            return false;
        }
        if (order.equals("")) {
            return true;
        }
        String[] orderElements = order.split("\\.");
        String[] order2Elements = order2.split("\\.");

        // select smallest array
        int limiter = orderElements.length;
        if (limiter > order2Elements.length) {
            limiter = order2Elements.length;
        }

        // compare progress on individual levels
        for (int i = 0; i < limiter; i++) {
            if (Integer.parseInt(orderElements[i]) > Integer.parseInt(order2Elements[i])) {
                return true;
            }
        }

        return false;
    }


    protected static Integer[] occurrencesInWeeks(List<Long> timestamps) {
        Integer[] occurrencesPerDayOfWeek = new Integer[]{0, 0, 0, 0, 0, 0, 0, 0};
        List<Set<String>> weeksWithOccurrences = List.of(new HashSet<String>(), new HashSet<String>(), new HashSet<String>(),
                new HashSet<String>(), new HashSet<String>(), new HashSet<String>(), new HashSet<String>());
        Calendar calendar = Calendar.getInstance();
        for (long start : timestamps) {
            calendar.setTimeInMillis(start);
            int year = calendar.get(Calendar.YEAR);
            int week = calendar.get(Calendar.WEEK_OF_YEAR);
            int weekDay = calendar.get(Calendar.DAY_OF_WEEK) - 2;
            // Mapping start of week at sunday to start of week at monday
            if (weekDay == -1) {
                weekDay = 6;
            }
            occurrencesPerDayOfWeek[weekDay]++;
            weeksWithOccurrences.get(weekDay).add(year + "_" + week);
        }

        for (int i = 0; i < 7; i++) {
            int weeksOccurring = weeksWithOccurrences.get(i).size();
            if (weeksOccurring == 0) {
                occurrencesPerDayOfWeek[i] = 0;
                continue;
            }
            int avgOccurrencePerWeekday = (int) Math.ceil((double) occurrencesPerDayOfWeek[i] / weeksOccurring);
            occurrencesPerDayOfWeek[i] = avgOccurrencePerWeekday;
            occurrencesPerDayOfWeek[7] += avgOccurrencePerWeekday;
        }

        return occurrencesPerDayOfWeek;
    }
}
