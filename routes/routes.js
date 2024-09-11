import express from 'express'
import { getPharmacyOrders, addPharmacyOrder, getPharmacyOrderByPrescriptionId, 
    editPharmacyOrderByPrescriptionId, deletePharmacyOrder } from '../controllers/pharmacyOrderTracking.js'

const router = express.Router()

router.route('/api/pharmacyorders')
    .get(getPharmacyOrders)
    .post(addPharmacyOrder)

// This utilizes URL parameters
router.route('/api/pharmacyorders/:prescriptionid')
    .get(getPharmacyOrderByPrescriptionId)
    .patch(editPharmacyOrderByPrescriptionId)
    .delete(deletePharmacyOrder)

// I will make the below a Query Parameter
// router.route('/api/pharmacyorders/:patientname+:medication')
//     .get(getPharmacyOrderByPatientNameAndMedication)



export default router