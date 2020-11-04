const milestoneModel = require('@models/milestone-model');
const labelModel = require('@models/label-model');
const commentModel = require('@models/comment-model');
const issueModel = require('@models/issue-model');

class IssueService {
  async deleteCommentByIssue(payload) {
    const isDeleted = await commentModel.deleteCommentByIssue(payload);

    return isDeleted;
  }

  async deleteMilestoneByIssue(payload) {
    const isDeleted = await issueModel.deleteMilestoneByIssue(payload);

    return isDeleted;
  }

  async insertAssigneeByIssue(payload) {
    const isInserted = await issueModel.insertAssigneeByIssue(payload);

    return isInserted;
  }

  async findOneWithLabel(id) {
    const issue = await issueModel.selectById(id, labelModel);

    return issue;
  }

  async createIssueToLabel(payload) {
    const issueToLabel = await issueModel.addIssueToLabels(payload);

    return issueToLabel;
  }

  async deleteAssignee(payload) {
    await issueModel.removeAssignee(payload);
  }

  async getIssues() {
    const issues = await issueModel.getIssues();
    return issues;
  }

  async updateIssueByMilestone(payload) {
    
    await issueModel.selectById(payload.issue_id);
    await milestoneModel.selectById(payload.milestone_id);
    await issueModel.updateIssueByMilestone(payload);

  }

  async deleteIssueByLabel(payload) {
    await issueModel.deleteIssueByLabel(payload);
  }

  async createIssue(payload) {
    const insertIssue = await issueModel.insert(payload);

    return insertIssue;
  }

  async updateIssue(payload) {
    const { id } = payload;

    delete payload.id;

    const updateIssue = await issueModel.update(payload, { where: { id } });

    return updateIssue;
  }

  async deleteIssue(payload) {
    const result = await issueModel.deleteById(payload);

    return result;
  }

  async createComment(payload) {
    await issueModel.selectById(payload.issue_id);
    const comment = await commentModel.createComment(payload);
    return comment;
  }

}

const issueService = new IssueService();

module.exports = issueService;
