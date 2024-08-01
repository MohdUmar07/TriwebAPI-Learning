import Report from "../models/report";
import { RequestHandler } from "express";
import { ReturnResponse } from "../utils/interfaces";
import ProjectError from "../helper/error";

const getReport:RequestHandler = async (req, res, next)  => {
    try {
        let report;

        if (!!req.params.reportId) {
            const reportId = req.params.reportId;
            report = await Report.findById(req.params.reportId);

            if (!report) {
                // Report not found, handle the error
                const err = new ProjectError("Report not found");
                err.statusCode = 404;
                throw err;
            }

            if (report.userId.toString() !== req.userId) {
                // User is not allowed to access this report, handle the error
                const err = new ProjectError("You are not allowed");
                err.statusCode = 405;
                throw err;
            }
        } else {
            // No reportId provided, retrieve reports for the user
            report = await Report.find({ userId: req.userId });
        }

        if (!report) {
            // If report is still null here, handle the error (unexpected)
            const err = new ProjectError("Report not found");
            err.statusCode = 404;
            throw err;
        }

        let resp: ReturnResponse = { status: "success", message: "Report!", data: report };
        res.send(resp);
    } catch (error) {
        next(error);
    }
};


export {getReport}