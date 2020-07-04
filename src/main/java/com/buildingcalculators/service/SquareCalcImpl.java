package com.buildingcalculators.service;

import com.buildingcalculators.dto.SquareDTO;
import org.springframework.stereotype.Component;

@Component
public class SquareCalcImpl implements SquareCalc {
    private double widthMeterSi;
    private double lengthMeterSi;

    @Override
    public double getResult(SquareDTO squareDTO) {
        convertAllUnitsToMeterSi(squareDTO);
        return UnitConverter
                .convertMeterUnitToResultUnit(getResultInMeterSI(), squareDTO.getResultUnits());
    }

    public void convertAllUnitsToMeterSi(SquareDTO squareDTO) {
        widthMeterSi = UnitConverter.convertUnitToMeterSi(squareDTO.getWidth(), squareDTO.getWidthUnits());
        lengthMeterSi = UnitConverter.convertUnitToMeterSi(squareDTO.getLength(), squareDTO.getLengthUnits());
    }

    public double getResultInMeterSI() {
        return widthMeterSi * lengthMeterSi;
    }
}
