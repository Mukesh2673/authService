const mongooseToSwagger = require('mongoose-to-swagger');
const swaggerJsdoc = require('swagger-jsdoc');
const { campaignSchema } = require('./swaggerComponents')
const {components}=require('./swaggerComponents')
//add Models
const User = require('../models/user');
const Report = require('../models/report');
const Notification = require('../models/notification/index');
const Message = require('../models/message');
const CampaignVolunteering = require('../models/campaign/campaignVolunteering');
const BookMarks = require("../models/bookmarks")
const Video = require("../models/video")
const Issue = require("../models/issue/issue")
const Skill = require("../models/skills/skill")
const Advocate = require("../models/advocate")

const IssueSchema=mongooseToSwagger(Issue);
const userSchema = mongooseToSwagger(User);
const reportSchema = mongooseToSwagger(Report);
const notificationSchema = mongooseToSwagger(Notification);
const messageSchema = mongooseToSwagger(Message);
const CampaignVolunteeringSchema = mongooseToSwagger(CampaignVolunteering);
const bookmarksSchema = mongooseToSwagger(BookMarks);
const videosSchema = mongooseToSwagger(Video);
const skillSchema = mongooseToSwagger(Skill);
const advocateSchema = mongooseToSwagger(Advocate)
const swaggerOptions = {
    swaggerDefinition: {
      openapi: '3.0.0',
      info: {
        title: 'Changer 2',
        version: '1.0.0',
        description: 'API documentation for the Changer app'
      },
      servers: [
        {
          url: 'http://localhost:3001/api',
          description: 'Local server'
        },
        {
          url: 'http://changer.com/api',
          description: 'Live server'
        }
      ],
      components: {
        schemas: {
          User: userSchema, 
          Report: reportSchema, 
          Notification: notificationSchema, 
          Message: messageSchema, 
          Campaign: campaignSchema, 
          CampaignVolunteering: CampaignVolunteeringSchema, 
          BookMarks: bookmarksSchema,
          Video: videosSchema,
          Issue:IssueSchema,
          Skill:skillSchema,
          Advocate: advocateSchema,
          campaignVolunteers:components.CampaignVolunteers,
          campaignPhasePayload: components.campaignPhasePayload,
          AllCampaign: components.allCampaigns,
          AuthorizationResponse: components.Authorization,
          AddCampaign:components.addCampaign,
          serverError:components.serverError,
          campaignMessage:components.messages,
          VolunteeringResponse:components.campaingVolunteeringResponse,
          campaignVolunteersResponse:components.campaignVolunteersResponse,
          addIssueResponse:components.addIssueResponse,
          issueRecordResponse:components.issueRecordsResponse,
          issueDetails:components.issueDetailsSchema,
          issueSentMessage:components.issueSentMessage,
          videoResponseSchema:components.videoResponseSchema,
          commentVideoResponse:components.commentVideoResponse,
          videoUploadResponse:components.videoUploadResponse,
          friendsImpactResponse:components.friendsImpactResponse,
          notificationResponse:components.notificationResponse,
          tokenResponseSchema:components.tokenResponseSchema,
          cognitoUserResponseSchema:components.cognitoUserResponseSchema,
          skillResponseSchema:components.skillResponseSchema, 
          disccusiongIssueSchema:components.disccusiongIssueSchema
        },
        securitySchemes: {
          BearerAuth: {
            type: 'http',
            scheme: 'bearer',
            bearerFormat: 'JWT',
          },
        },
      },
    },
    apis: ['./routes/swaggerRoutes/*.js'] 
  };
const swaggerDocs = swaggerJsdoc(swaggerOptions);
module.exports= {swaggerDocs}