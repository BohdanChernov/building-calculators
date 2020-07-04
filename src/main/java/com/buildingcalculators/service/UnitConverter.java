package com.buildingcalculators.service;

import com.buildingcalculators.dto.Units;
import org.springframework.stereotype.Service;

@Service
public class UnitConverter {
    public static double convertUnitToMeterSi(double numberToConvert, Units units) {
        double convertedNumber = 0;
        if (units.equals(Units.MM)) {
            convertedNumber = numberToConvert / 1000;
        } else if (units.equals(Units.CM)) {
            convertedNumber = numberToConvert / 100;
        } else if (units.equals(Units.M)) {
            convertedNumber = numberToConvert / 1;
        } else if (units.equals(Units.KM)) {
            convertedNumber = numberToConvert * 1000;
        }
        return convertedNumber;
    }

    public static double convertMeterUnitToResultUnit(double numberInMeterSiToConvert, Units resultUnits) {
        double convertedNumber = 0;
        if (resultUnits.equals(Units.MM)) {
            convertedNumber = numberInMeterSiToConvert * 1000;
        } else if (resultUnits.equals(Units.CM)) {
            convertedNumber = numberInMeterSiToConvert * 100;
        } else if (resultUnits.equals(Units.M)) {
            convertedNumber = numberInMeterSiToConvert * 1;
        } else if (resultUnits.equals(Units.KM)) {
            convertedNumber = numberInMeterSiToConvert / 1000;
        }
        return convertedNumber;
    }
}
