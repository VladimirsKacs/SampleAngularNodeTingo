    <div class="modal-header">
        <h3 class="modal-title">I'm a modal!</h3>
    </div>
    <div class="modal-body">
        <form name="editorForm">
        <label>First Name:</label>
        <input ng-model="contact.first">
        <label>Last Name:</label>
        <input ng-model="contact.last">
        <label>Phone #:</label>
        <input ng-model="contact.phone">
        </form>
    </div>
<div class="modal-footer">
    <button class="btn btn-primary" ng-click="ok()">OK</button>
    <button class="btn btn-warning" ng-click="cancel()">Cancel</button>
</div>
