    <div ng-controller="phoneBookController as pbCtrl">

        <table class="table">
            <tr  class="row">
                <th>First Name</th>
                <th>Last Name</th>
                <th>Phone #</th>
            </tr>
            <tr ng-repeat="contact in pbCtrl.contacts track by $index" class="row">
                <td class="col-xs-6 col-sm-3">{{contact.first}}</td>
                <td class="col-xs-6 col-sm-3">{{contact.last}}</td>
                <td class="col-xs-6 col-sm-4">{{contact.phone}}</td>
                <td><button ng-click="pbCtrl.setToEdit($index)">Edit</button></td>
            </tr>
        <tr class="row"><td class="col-xs-6 col-sm-3"><button ng-click="pbCtrl.addNew()">Add</button></td></tr>
        </table>
    </div>