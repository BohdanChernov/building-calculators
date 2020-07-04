package com.buildingcalculators.service;

import com.buildingcalculators.dto.VolumeDTO;
import org.springframework.stereotype.Component;

@Component
public class VolumeCalcImpl implements VolumeCalc {
    private double widthMeterSi;
    private double lengthMeterSi;
    private double heightMeterSi;

    @Override
    public double getResult(VolumeDTO volumeDTO) {
        convertAllUnitsToMeterSi(volumeDTO);
        return UnitConverter
                .convertMeterUnitToResultUnit(getResultInMeterSI(), volumeDTO.getResultUnits());
    }

    public void convertAllUnitsToMeterSi(VolumeDTO volumeDTO) {
        widthMeterSi = UnitConverter.convertUnitToMeterSi(volumeDTO.getWidth(), volumeDTO.getWidthUnits());
        lengthMeterSi = UnitConverter.convertUnitToMeterSi(volumeDTO.getLength(), volumeDTO.getLengthUnits());
        heightMeterSi = UnitConverter.convertUnitToMeterSi(volumeDTO.getHeight(), volumeDTO.getHeightUnits());
    }

    public double getResultInMeterSI() {
        return widthMeterSi * lengthMeterSi * heightMeterSi;
    }
}
