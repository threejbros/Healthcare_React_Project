import pharmacyOrder from "../models/pharmacyOrder";

const getPharmacyOrders = async (req, res) => {

    // The following variables are if we use queries. 
    const patientName = req.query.patientName;      // NOTE: patient name is currently separated by a period so will later need to be parsed accordingly.
    const medication = req.query.medication;

    // if patientName and medication query is specified then we have a different operation. 
    if (patientName && medication) {
        res.send("Get All Pharmacy Orders of specified Patient " + patientName + " & specified Medication " + medication)
    }
    else {
        res.send("Get All Pharmacy Orders")
    }
}

const addPharmacyOrder = async (req, res) => {
    res.send("Add New Pharmacy Order")
}

const getPharmacyOrderByPrescriptionId = async (req, res) => {
    res.send("Get Pharmacy Order By Prescription ID")
}

const editPharmacyOrderByPrescriptionId = async (req, res) => {
    res.send("Edit Pharmacy Order By Prescription ID")
}

const deletePharmacyOrder = async (req, res) => {
    res.send("Delete specified Pharmacy Order")
}

// const getPharmacyOrderByPatientNameAndMedication = async () => {
//     res.send("Get All Pharmacy Orders of specified Patient & specified Medication")
// }

export {
    getPharmacyOrders,
    addPharmacyOrder,
    getPharmacyOrderByPrescriptionId,
    editPharmacyOrderByPrescriptionId,
    deletePharmacyOrder
}