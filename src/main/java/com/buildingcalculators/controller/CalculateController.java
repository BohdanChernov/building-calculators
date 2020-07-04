package com.buildingcalculators.controller;

import com.buildingcalculators.dto.SquareDTO;
import com.buildingcalculators.dto.VolumeDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import com.buildingcalculators.service.SquareCalc;
import com.buildingcalculators.service.VolumeCalc;

@RestController
@CrossOrigin("*")
public class CalculateController {
    private final SquareCalc squareCalc;
    private final VolumeCalc volumeCalc;

    @Autowired
    public CalculateController(SquareCalc squareCalc, VolumeCalc volumeCalc) {
        this.squareCalc = squareCalc;
        this.volumeCalc = volumeCalc;
    }

    @PostMapping("/getSquareResult")
    public double getSquareResult(@RequestBody SquareDTO squareDTO) {
        return squareCalc.getResult(squareDTO);
    }

    @PostMapping("/getVolumeResult")
    public double getVolumeResult(@RequestBody VolumeDTO volumeDTO) {
        return volumeCalc.getResult(volumeDTO);
    }
}
