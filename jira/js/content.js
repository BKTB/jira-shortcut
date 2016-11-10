chrome.runtime.onMessage.addListener(function (msg, sender, sendResponse) {
    if (msg.text === 'get_parent_jira_issue') {
      var parentIssue = document.querySelector("a#parent_issue_summary.issue-link")

      var parentIssueLink = ""
      if (parentIssue)
        parentIssueLink = "<a href='" + parentIssue.href + "'>" + parentIssue.text + "</a>"
      sendResponse(parentIssueLink);
    }
});
