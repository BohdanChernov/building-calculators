package com.buildingcalculators.service;

import com.buildingcalculators.dto.SquareDTO;
import org.springframework.stereotype.Service;

@Service
public interface SquareCalc {
    double getResult(SquareDTO squareDTO);
}
