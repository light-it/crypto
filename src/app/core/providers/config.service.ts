// import { environment } from '../../../environments/environment';
//
// export class ConfigService {
//   // public static imgPath = './assets/img/';
//   // public static basePath: string = `${ENV.PROTOCOL}//${ENV.API_URL}/api/`;
//   // public static socketPath: string = ENV.WEBSOCKET_URL;
//   public static basePath: string = environment.basePath;
//   public static basePathApi: string = environment.basePathApi;
//   public static socketPath: string = environment.WS;
//   public static imageDefaultPath = './assets/img/cam.png';
//   public static defaultPhoneImg = './assets/img/tablet.png';
//   public static googleMapKey = 'AIzaSyBmhVhypTwikmmtoKVBpuyviUzNQfYXn0k';
//   public static googleSearchPath = 'https://maps.googleapis.com/maps/api/place/textsearch/json?';
//
//   public static usersPath = `${ConfigService.basePathApi}users/`;
//   public static simpleUsersPath = `${ConfigService.basePathApi}simple-users-search/`;
//
//   public static registrationPath = `${ConfigService.basePathApi}auth/registration/`;
//   public static loginPath = `${ConfigService.basePathApi}auth/login/`;
//   public static verifyEmailPath = `${ConfigService.basePathApi}auth/registration/verify-email/`;
//   public static logoutPath = `${ConfigService.basePathApi}auth/logout/`;
//
//   public static birthWeekPath = `${ConfigService.basePathApi}week_birthdays/`;
//   public static birthdaysPath = `${ConfigService.basePathApi}birthdays/`;
//   public static userMessagesPath = `${ConfigService.basePathApi}user_messages/`;
//   public static messagesPath = `${ConfigService.basePathApi}messages/`;
//   public static votePath = `${ConfigService.basePathApi}vote/`;
//
//   public static trustboxPath = `${ConfigService.basePathApi}trust_box/`;
//   public static trustboxIdentifierPath = `${ConfigService.basePathApi}trust_box/identifier/`;
//   public static trustboxMessagesPath = `${ConfigService.basePathApi}trust_box/messages/`;
//   public static trustboxChatPath = `${ConfigService.basePathApi}trust_box/chat/`;
//
//   public static galleryPath = `${ConfigService.basePathApi}albums/`;
//   public static vacationStatisticPath = `${ConfigService.basePathApi}vacations/statistic/`;
//   public static vacationRequestPath = `${ConfigService.basePathApi}vacation_requests/`;
//   public static verifyVacationRequestPath = `${ConfigService.basePathApi}vacation_requests/verify/`;
//   public static userPath = `${ConfigService.basePathApi}auth/user/`;
//   public static changePasswordPath = `${ConfigService.basePathApi}auth/password/change/`;
//   public static userSearch = `${ConfigService.basePathApi}users-search/`;
//   public static commentsPath = `${ConfigService.basePathApi}comments/`;
//   public static mentorshipWPath = `${ConfigService.basePathApi}mentoring/want_be_mentor/`;
//   public static mentorshipNPath = `${ConfigService.basePathApi}mentoring/need_mentor/`;
//   public static resetPasswordPath = `${ConfigService.basePathApi}auth/password/reset/`;
//   public static confirmResetPasswordPath = `${ConfigService.basePathApi}auth/password/reset/confirm/`;
//   public static specializationsPath = `${ConfigService.basePathApi}specializations/`;
//   public static hobbiesPath = `${ConfigService.basePathApi}hobbies/`;
//   public static skillsPath = `${ConfigService.basePathApi}skills/`;
//   public static firstUserId = `${ConfigService.basePathApi}thanks/first_user_id/`;
//
//   public static tourPath = `${ConfigService.basePathApi}tour/`;
//
//   public static defaultImageUser = 'assets/img/cam.png';
//   public static defaultProtegeCommentImage = 'assets/img/comment.png';
//   public static customThank = 'assets/img/custom_thank.png';
//   public static defaultImageCompany = 'assets/img/placeholder-company.png';
//   public static trustboxUser = 'assets/img/trustbox-user.png';
//
//   // public static googlePrjNumber: string = ENV.GOOGLE_PRJ_NUMBER;
//   // public static appId: string = ENV.APP_ID;
//   public static getAllReportsPath = `${ConfigService.basePathApi}meetups/reports/`;
//   public static createReportsPath = `${ConfigService.basePathApi}meetups/reports/`;
//   public static pathReportsPath = `${ConfigService.basePathApi}meetups/reports/`;
//   public static getMyReports = `${ConfigService.basePathApi}meetups/my_reports/`;
//   public static getMeetups = `${ConfigService.basePathApi}meetups/meetups/`;
//   public static getSearchUser = `${ConfigService.basePathApi}simple-users-search/`;
//   public static getMessageEvent = `${ConfigService.basePathApi}messages-detail/`;
//   public static getAdminReports = `${ConfigService.basePathApi}meetups/admin-reports/`;
//   public static getReport = `${ConfigService.basePathApi}meetups/reports/`;
//
//   public static getAdminSalary = `${ConfigService.basePathApi}salary/admin/salary_list/`;
//   public static getAdminStatistic = `${ConfigService.basePathApi}salary/admin/history/`;
//   public static patchUserSalary = `${ConfigService.basePathApi}salary/`;
//   public static copyRate = `${ConfigService.basePathApi}salary/admin/copy/`;
//   public static getUserStatistic = `${ConfigService.basePathApi}salary/my_salary/`;
//   public static adminSalary = `${ConfigService.basePathApi}salary/list/`;
//   public static patchUserSalaryPath = `${ConfigService.basePathApi}salary/wage/`;
//   public static copyRatePath = `${ConfigService.basePathApi}salary/copy/`;
//   public static userStatisticPath = `${ConfigService.basePathApi}salary/history/`;
//
//   public static basePathLocator: string = environment.basePathLocator;
//   public static basePathLocatorApi: string = environment.basePathLocatorApi;
//   public static getBuildingsPath = `${ConfigService.basePathLocatorApi}buildings/`;
//   public static getFloorsPath = `${ConfigService.basePathLocatorApi}floors/`;
//   public static getWorkplacesPath = `${ConfigService.basePathLocatorApi}workplaces/`;
//   public static getUnattachedUsersPath = `${ConfigService.basePathLocatorApi}users/unattached/`;
//
//   public static thanksPath = `${ConfigService.basePathApi}thanks/statistics/`;
//   public static myStatisticThanksPath = `${ConfigService.basePathApi}thanks/my_thanks/`;
//   public static sayThanksPath = `${ConfigService.basePathApi}thanks/say_thanks/`;
//   public static thanksReasonsPath = `${ConfigService.basePathApi}thanks/reasons/`;
//   public static getThanksStatusPath = `${ConfigService.basePathApi}thanks/say_thanks/`;
//   public static topThanksPath = `${ConfigService.basePathApi}thanks/all_time_statistic/`;
//
//   public static mentorsPath = `${ConfigService.basePathApi}mentoring/mentors/`;
//   public static needMentorPath = `${ConfigService.basePathApi}mentoring/need_mentor_list/`;
//   public static mentoringUsersPath = `${ConfigService.basePathApi}mentoring/users/`;
//   public static wannaBeMentorPath = `${ConfigService.basePathApi}mentoring/wanna_be_mentor_list/`;
//   public static messageForMentor = `${ConfigService.basePathApi}mentoring/comment/`;
//
//   public static slackPath = 'https://light-it-team.slack.com/messages/@';
//
//   public static salaryBonusReason = `${ConfigService.basePathApi}salary/bonus_reason/`;
//   public static salaryPatchBonusPath = `${ConfigService.basePathApi}salary/bonus/`;
//   public static salaryUserPath = `${ConfigService.basePathApi}salary/detail/`;
//
//   public static switchesPath = `${ConfigService.basePathApi}switches/`;
//
//   public static adminUsersPath = `${ConfigService.basePathApi}users/approved/`;
//   public static adminUserPath = `${ConfigService.basePathApi}users/`;
//   public static adminNotApprovedUserPath = `${ConfigService.basePathApi}users/not_approved/`;
//   public static adminDismissedUserPath = `${ConfigService.basePathApi}users/dismissed/`;
//
//   public static addDevicePath = `${ConfigService.basePathApi}add_device/`;
//   // public static googlePrjNumber: string = environment.GOOGLE_PRJ_NUMBER;
//   public static oneSignalId: string = environment.oneSignalId;
//
//   public static allPlansPath = `${ConfigService.basePathApi}mentoring/plans/all/`;
//   public static availablePlansPath = `${ConfigService.basePathApi}mentoring/plans/`;
//
//
//   public static vacationUsersPath = `${ConfigService.basePathApi}vacation_requests/`;
//   public static applicantInfoPath = `${ConfigService.basePathApi}vacations/statistic/`;
//   public static applicationsOfUserPath = `${ConfigService.basePathApi}vacation_requests/`;
//   public static patchVacationDaysPath = `${ConfigService.basePathApi}vacation_days/`;
//   public static vacationUsersNewPath = `${ConfigService.basePathApi}vacations/vacation_applicants_with_requests/`;
//   public static applicantDetailPath = `${ConfigService.basePathApi}vacations/applicant_detail/`;
//   public static vacationChartPath = `${ConfigService.basePathApi}vacations/vacation_chart/`;
//
//   public static planGoalsPath = `${ConfigService.basePathApi}mentoring/item/add/`;
//   public static planGoalsPatchPath = `${ConfigService.basePathApi}mentoring/`;
//   public static vacationUserPeriodPath = `${ConfigService.basePathApi}vacations/user_period/`;
//   public static testingDevicesPath = `${ConfigService.basePathApi}test_devices/`;
//   public static invitedSpeakerPath = `${ConfigService.basePathApi}guest_speaker/`;
//
//   public static userMentoringPath = `${environment.basePathApiMentoring}users/current`;
//   public static mentoringBasePath = environment.basePathApiMentoring;
//   public static mentoringDefaultPath = environment.basePathMentoring;
// }
