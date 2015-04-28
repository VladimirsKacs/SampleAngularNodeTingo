/**
 * Created by Vladimirsk on 4/28/2015.
 */

app.service('loginService', function()
{
    var currentUser = {};

    var _getCurrentUser = function ()
    {
        return currentUser;
    }

    var _setCurrentUser = function (value)
    {
        currentUser = value;
    }

    var _setCurrentUserName = function (value)
    {
        currentUser.UserName = value;
    }

    return {getCurrentUser: _getCurrentUser,setCurrentUser:_setCurrentUser, setCurrentUserName: _setCurrentUserName};
});