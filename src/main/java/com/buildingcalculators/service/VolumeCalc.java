package com.buildingcalculators.service;

import com.buildingcalculators.dto.VolumeDTO;
import org.springframework.stereotype.Service;

@Service
public interface VolumeCalc {
    double getResult(VolumeDTO volumeDTO);
}
