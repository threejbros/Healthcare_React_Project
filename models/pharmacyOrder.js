import mongoose from "mongoose";

const PharmacyOrderSchema = new mongoose.Schema({
    prescriptionID: {
        type: Number, 
        min: [10000, "Prescription ID must be at least 10000"], 
        max: [99999, "Prescription ID must be at most 99999"], 
        required: [true, "Prescription ID is required"]
    }, 
    patientName: {
        type: String, 
        required: [ true, "Name is required"]
    },
    patientID: {
        type: Number, 
        min: [100000, "Patient ID must be at least 100000"], 
        max: [999999, "Patient ID must be at most 999999"],
        required: [true, "Patient ID is required"]
    },
    physicianName: {
        type: String, 
        required: [ true, "Physician Name is required"]
    },
    medicationName: {
        type: String, 
        required: [ true, "Medication Name is required"]
    }, 
    medicationID: {
        type: Number, 
        min: [1000, "Medication ID must be at least 1000"],
        max: [9999, "Medication ID must be at most 9999"],
        required: [ true, "Medication ID is required"]
    }, 
    dosage: {
        type: String, 
        required: [true, "Dosage is required"]
    }, 
    frequency: {
        type: String, 
        required: [true, "Frequency is required"]
    },
    dateOrdered: {
        type: Date, 
        required: [true, "Date Ordered is required"], 
        default: Date.now
    }, 
    dateFilled: {
        type: Date
    },
    pharmacistName: {
        type: String
    },
    pharmacistID: {
        type: Number,
        min: [10000, "Pharmacist ID must be at least 10000"],
        max: [99999, "Pharmacist ID must be at most 99999"]
    }
});

export default mongoose.Model("Pharmacy Orders", PharmacyOrderSchema);