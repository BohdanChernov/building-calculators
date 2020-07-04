package com.buildingcalculators.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class VolumeDTO {
    private double width;
    private Units widthUnits;
    private double length;
    private Units lengthUnits;
    private double height;
    private Units heightUnits;
    private Units resultUnits;
}
