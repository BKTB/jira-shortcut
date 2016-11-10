chrome.runtime.onMessage.addListener(function (msg, sender, sendResponse) {
      var parentIssue = document.querySelector("a#parent_issue_summary.issue-link")

      var parentIssueLink = ""
      if (parentIssue)
        parentIssueLink = "<a href='" + parentIssue.href + "'>" + parentIssue.text + "</a>"
      sendResponse(parentIssueLink);
    }
});
