You are working on the Poker Reflex public website and/or app support/privacy pages.

Goal: update the existing Privacy Policy and, if relevant, the Support page/store disclosure notes to accurately cover optional screenshot attachments in in-app support requests.

Important constraints:

* Do not rewrite the full Privacy Policy.
* Preserve the existing structure, tone, language, and formatting of the current page.
* Only add or adjust the minimum necessary sections.
* Do not add code examples.
* Do not expose internal implementation details such as raw bucket names, signed URL formats, email markup, API routes, or storage paths.
* Do not make stronger claims than the product actually supports.
* Keep wording clear, user-facing, and store-review friendly.

Context to reflect:

* Poker Reflex may request access to the user’s photo library only when the user chooses to attach screenshots to an in-app support request.
* Screenshot attachments are optional.
* Users can submit support requests without attaching screenshots.
* Screenshots may contain personal information depending on what the user captured before selecting the image.
* Screenshots are used only to investigate, debug, reproduce, and resolve support issues.
* Screenshots are uploaded through the app’s approved support flow and stored in private, restricted-access storage.
* Support emails may reference screenshots through temporary restricted-access links.
* Access is limited to the Poker Reflex support/development team.
* Screenshots are not used for advertising, tracking, profiling, analytics, or training unrelated to support.
* Android and iOS store disclosures may need to mention optional support screenshots as user-provided support content.
* Final wording must remain subject to legal/privacy review before release.

Suggested Privacy Policy addition:
Add a short subsection under the existing “Information We Collect”, “Support”, “User Content”, or equivalent section.

Proposed wording:

“When you contact Poker Reflex support from within the app, you may choose to attach screenshots to help us understand and resolve your issue. Attaching screenshots is optional, and you can submit a support request without providing any screenshots.

If you attach a screenshot, it may contain personal information depending on what is visible in the image you selected. We use support screenshots only to investigate, debug, reproduce, and resolve the support request you submitted. We do not use support screenshots for advertising, tracking, profiling, or unrelated analytics.

Support screenshots are transmitted through our support flow, stored in private restricted-access storage, and may be made available to our support/development team through temporary access links. Access is limited to team members who need it to handle the support request.”

Retention/deletion wording:
Add a retention paragraph, but only if the project owner confirms the final retention period. If no retention policy exists yet, leave a clear TODO in the page or in the PR notes rather than inventing one.

Preferred policy to propose for review:
“Support screenshots are retained only for as long as reasonably necessary to investigate and resolve the related support request, then deleted or made inaccessible according to our support data retention process. You may contact us to request deletion of screenshots you provided, subject to any legal, security, or abuse-prevention obligations.”

If the team wants a concrete default, propose this as a product/legal decision, not as final legal copy:

* Delete support screenshots within 90 days after the related support request is resolved.
* Allow earlier deletion on user request where technically and legally possible.
* Keep only minimal support metadata if needed for audit, abuse prevention, or issue history.

Suggested Support page addition:
Add a short note near the support contact form or FAQ.

Proposed wording:

“You can optionally attach screenshots when contacting support. Screenshots help us understand bugs or account/app issues more quickly, but they are not required. Before attaching a screenshot, please make sure you are comfortable sharing everything visible in the image.”

Suggested iOS permission wording:
Use clear purpose-limited wording for the photo library permission.

Proposed wording:

“Poker Reflex uses photo library access only when you choose to attach screenshots to a support request.”

Alternative shorter wording:

“Allow photo access to attach screenshots to your support request.”

Suggested Android/iOS store disclosure notes:
Update store privacy/data safety notes to reflect:

* Data type: user-provided content / photos or videos / support content, depending on the store taxonomy.
* Collection: optional, only when the user attaches screenshots to a support request.
* Purpose: app functionality, customer support, debugging, issue resolution.
* Sharing: not shared for advertising or tracking. Only processed by service providers needed to operate support/storage/email, if applicable.
* Linked to user: likely yes if the support request includes account/contact information.
* Tracking: no.
* Advertising/profiling: no.
* User can submit support without screenshots.

Acceptance criteria:

* Privacy Policy clearly states that support screenshots are optional.
* Privacy Policy clearly states that support requests can be submitted without screenshots.
* Privacy Policy warns that screenshots may include personal information visible in the image.
* Privacy Policy states the limited purposes: support, debugging, reproduction, issue resolution.
* Privacy Policy states restricted access by Poker Reflex support/development team.
* Privacy Policy states screenshots are not used for ads, tracking, profiling, or unrelated analytics.
* Support page includes a short user-facing explanation before or near screenshot upload.
* iOS/Android permission wording is purpose-specific and does not imply broad photo access.
* Retention/deletion is either clearly defined or explicitly flagged as a TODO requiring owner/legal decision before release.
* No implementation secrets, raw URLs, internal storage paths, email markup, or code snippets are exposed in public copy.
* Final PR summary should mention that App Store Connect and Google Play Data Safety disclosures may need to be reviewed/updated.
