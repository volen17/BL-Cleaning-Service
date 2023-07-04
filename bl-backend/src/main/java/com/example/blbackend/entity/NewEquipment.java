package com.example.blbackend.entity;

public class NewEquipment {
    private String equipmentName;
    private Double equipmentPrice;
    private String equipmentDescription;
    private String imageUrl;

    public String getEquipmentName() {
        return equipmentName;
    }

    public void setEquipmentName(String equipmentName) {
        this.equipmentName = equipmentName;
    }

    public Double getEquipmentPrice() {
        return equipmentPrice;
    }

    public void setEquipmentPrice(Double equipmentPrice) {
        this.equipmentPrice = equipmentPrice;
    }

    public String getEquipmentDescription() {
        return equipmentDescription;
    }

    public void setEquipmentDescription(String equipmentDescription) {
        this.equipmentDescription = equipmentDescription;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }
}
