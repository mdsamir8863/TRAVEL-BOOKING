import express from "express";
import {
  addNewAdmin,
  addNewDoctor,
  allPatients,
  getAllDoctors,
  getUserDetails,
  login,
  logoutAdmin,
  logoutPatient,
  patientRegister,
} from "../controller/userController.js";
import {
  isAdminAuthenticated,
  isPatientAuthenticated,
} from "../middlewares/auth.js";

const router = express.Router();

router.post("/patient/register", patientRegister);
router.post("/login", login);
router.post("/admin/addnew", addNewAdmin);
router.post("/doctor/addnew", addNewDoctor);
router.get("/doctors", getAllDoctors);
router.get("/allpatient", allPatients);
router.get("/patient/me", isPatientAuthenticated, getUserDetails);
router.get("/admin/me", isAdminAuthenticated, getUserDetails);
router.get("/patient/logout", isPatientAuthenticated, logoutPatient);
router.get("/admin/logout", logoutAdmin);

export default router;




// axios.get('localhost:2300/api/v1/user/doctors')
// .th