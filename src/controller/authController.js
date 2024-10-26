const { User } = require("../models");
const mongoose = require("mongoose");

exports.signup = async (req, res) => {
  try {
    const user = req.user;
    let { page=1, pageSize=10 } = req.query;
    page = parseInt(page, 10);
    pageSize = parseInt(pageSize, 10);
    const notification = await Notification.find({ user: user })
      .sort({ createdAt: -1 })
      .populate([
        {
          path: "user",
          model: User,
          select: "_id profileImage firstName lastName username", // Specify the fields you want to select
        },
        {
          path: "activity",
          model: User,
          select: "_id profileImage firstName lastName username", // Specify the fields you want to select
        },
        {
          path: "joinedIssue",
          model: Issue,
          populate: {
            path: "joined",
            model: User,
          },
        },
      ]).skip((page - 1) * pageSize)
      .limit(pageSize);
    const totalNotifications = await Notification.countDocuments({ user: user });
    const totalPages = Math.ceil(totalNotifications / pageSize);
    return res.json({
      status: 200,
      //data: categorizedNotifications,
      data:notification,
      totalPages:totalPages,
      totalRecords:totalNotifications,
      success: true,
      message: res.__("NOTIFICATION_RETERIVED"),
    });
  } catch (err) {
    console.log("value of err irs", err);
    return res.json({ status: 400, data: [], success: false, message: error });
  }
};








