import { NextFunction, Request, RequestHandler, Response } from 'express';
import httpStatus from 'http-status';
import sendResponse from '../../utils/sendResponse';
import { StudentServices } from './student.service';
import cathAsync from '../../utils/cathAsync';



const getSingleStudent = cathAsync(async ( req, res, next ) => {
    const { studentId } = req.params;
    const result = await StudentServices.getSingleStudentFromDB(studentId);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Student is retrieved successfully',
      data: result,
    });
});

const getAllStudents =  cathAsync(async ( req, res, next ) => {
    const result = await StudentServices.getAllStudentsFromDB();

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Student are retrieved succesfully',
      data: result,
    })
});

const deleteStudent =  cathAsync(async ( req, res, next ) => {
    const { studentId } = req.params;
    const result = await StudentServices.deleteStudentFromDB(studentId);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Student is deleted succesfully',
      data: result,
    })
});

export const StudentControllers = {
  getAllStudents,
  getSingleStudent,
  deleteStudent,
};