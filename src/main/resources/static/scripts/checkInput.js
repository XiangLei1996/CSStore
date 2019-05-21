function insertAfter(newElement,targetElement) {
    var parent = targetElement.parentNode;
    if (parent.lastChild == targetElement) {
        parent.appendChild(newElement);
    }
    else {
        parent.insertBefore(newElement,targetElement.nextSibling);
    }
}

function addLoadEvent(func) {
    var oldonload = window.onload;
    if (typeof oldonload != 'function') {
        window.onload = func;
    }
    else {
        window.onload = function() {
            oldonload();
            func();
        }
    }
}

var passwordConfirmed = false;

function MessageTypeProto() {
    this.none = '';
    this.tooShort = '';
    this.tooLong = '';
    this.invalid = '';

    this.required = true;
    this.minLength = 0;
    this.maxLength = 999;
    this.pass = false;
    this.reg = '\\S*';
}

var messageTypeProto = new MessageTypeProto();

var userType = new MessageTypeProto();
userType.invalid = '用户名无效。';
userType.none = '请输入您的用户名。';
userType.tooLong = '用户名过长。';
userType.tooShort = '用户名过短。';
userType.maxLength = 20;
userType.minLength = 6;
userType.reg = '\\w{6,20}';

var passwordType = new MessageTypeProto();
passwordType.invalid = '密码无效。';
passwordType.none = '请输入您的密码';
passwordType.tooShort = '密码太短';
passwordType.minLength = 8;
passwordType.reg = '\\w{8,}';

var emailType = new MessageTypeProto();
emailType.none =  '请输入您的邮箱地址。';
emailType.invalid =  '邮箱格式不正确。';
emailType.reg = '\\w[-\\w.+]*@([A-Za-z0-9][-A-Za-z0-9]+\\.)+[A-Za-z]{2,14}';

var phoneType = new MessageTypeProto();
phoneType.none = '请输入您的电话号码。';
phoneType.invalid = '电话号码格式不正确。';
phoneType.reg = '\\d+';

var messageTypeList = {
    'username': userType,
    'password': passwordType,
    'emailaddress': emailType,
    'phonenumber': phoneType
}

function checkText(targetElement,cb) {
    var element = targetElement;
    if (!cb(element.value)) {
    }
}

function checkSubmit() {
    // return userType.pass&&passwordType.pass&&passwordConfirmed&&emailType.pass&&phoneType.pass
    if (userType.pass&&passwordType.pass&&passwordConfirmed&&emailType.pass&&phoneType.pass) {
        return true;
    }
    alert('注册失败！');
    return false;
}

function checkinput(inputElement) {
    logStatus('inputValue',inputElement.value);
    var messageType = inputElement.id;
    var inputMessageType = messageTypeList[messageType];
    var inputLength = inputElement.value.length;
    var inputReg = new RegExp(inputMessageType.reg);
    var pass = inputMessageType.pass;

    // logStatus(messageTypeList[messageType]);
    if (inputMessageType.required && inputLength == 0) {
        inputMessageType.pass = false;
        setWarning(inputElement,messageType,inputMessageType.none);
    }
    else if (inputLength < inputMessageType.minLength) {
        inputMessageType.pass = false;
        setWarning(inputElement,messageType,inputMessageType.tooShort);
    }
    else if (inputLength > inputMessageType.maxLength) {
        inputMessageType.pass = false;
        setWarning(inputElement,messageType,inputMessageType.tooLong);
    }
    else if (!inputReg.test(inputElement.value)) {
        inputMessageType.pass = false;
        setWarning(inputElement,messageType,inputMessageType.invalid);
    }
    else {
        inputMessageType.pass = true;
        logStatus('username',messageTypeList['username'].pass);
        logStatus('password',messageTypeList['password'].pass);
        logStatus('emailType',messageTypeList['emailaddress'].pass);
        logStatus('phoneType',messageTypeList['phonenumber'].pass);
        logStatus('passwordConfirmed',passwordConfirmed);
        setWarning(inputElement,messageType,'');
    }
}

function confirmPassword(inputElement) {
    var password = document.getElementById('password').value;
    if (inputElement.value != password) {
        passwordConfirmed = false;
        setWarning(inputElement,'confirmWarning','两次输入的密码不一致。');
    }
    else {
        passwordConfirmed = true;
        setWarning(inputElement,'confirmWarning','');
    }
}

function logStatus(name,status) {
    console.log(name + ':' + status + '\n');
}

function setWarning(targetElement,messageType,message) {
    var warningid = messageType+'warning';
    var warning = document.getElementById(warningid);
    if (message.length) {
        if (!warning) {
            var warning = document.createElement('p');
            warning.id = warningid;
            warning.classList.add('warning');
            insertAfter(warning,targetElement);
        }
        warning.innerHTML = message;
    }
    else if (warning) {
        targetElement.parentNode.removeChild(warning);
    }
}
