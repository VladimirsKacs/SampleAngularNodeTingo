    <div ng-controller="loginController as liCtrl">
        <form name="editorForm">
        <label>User Name:</label>
        <input ng-model="liCtrl.userName">
        <label>Password:</label>
        <input type="password" ng-model="liCtrl.password">
        <button class="btn btn-primary" ng-click="liCtrl.logOn()">OK</button>
        </form>
    </div>