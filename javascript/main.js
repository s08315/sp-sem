
/*editProfile.html*/
function checkUsername(a){ // pomozna funkcije
	var allowedUsername = /^[a-zA-Z0-9\-_]+$/;
	var validUsername = $(a).val().match(allowedUsername);
	if(validUsername == null){
		$(a).css("background-color", "red");
		return false;
	}
	$(a).css("background-color", "white");
	return true;
}
function checkEmail(a){ // pomozna funkcije
	var email = $(a).val();
	var allowedEmail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	var validEmail = allowedEmail.test(email);
	if(validEmail == false){
		$(a).css("background-color", "red");
		return false;
	}
	$(a).css("background-color", "white");
	return true;
}
function checkDate(a) {
	var date = $(a).val();
  	var parms = date.split(/[\.\-\/]/);
  	var yyyy = parseInt(parms[2],10);
  	var mm   = parseInt(parms[1],10);
  	var dd   = parseInt(parms[0],10);
  	var date = new Date(yyyy,mm-1,dd,0,0,0,0);
  	var bool = mm === (date.getMonth()+1) && dd === date.getDate() && yyyy === date.getFullYear();
	if (!bool) {
		$(a).css("background-color","red");
		return false;
	} else {
		$(a).css("background-color","white");
	}
	return true;
}

function updateProfile(){
	var bool = true;
	bool = checkUsername("#editName") && bool;
	bool = checkEmail("#editEmail") && bool;
	//bool = checkDate("#editBirthDate") && bool;
	if(($("#editPassword1").val() !== $("#editPassword2").val()) || $("#editPassword1").val() == ""){
		$(".editAccPwdError").css("visibility", "visible");
		bool = false;
	} else{
		$(".editAccPwdError").css("visibility", "hidden");
	}
}

function editProfileIMG(){
	$("#editProfileImgUpload").click();
}

$(".date-picker").datepicker();

$(".date-picker").on("change", function () {
    var id = $(this).attr("id");
    var val = $("label[for='" + id + "']").text();
    $("#msg").text(val + " changed");
});
/*END OF editProfile.html*/

function postNew(){

}

function loginAcc(){

}

/*register.html*/
function registerAcc(){
	var bool = true;
	bool = validateUsername("#regName") && bool;
	bool = validateEmail("#regMail") && bool;
	if (($("#regPassword1").val() !== $("#regPassword2").val()) || $("#regPassword1").val() == "") {
		$(".editAccPwdError").css("visibility","visible");
		bool = false;
	} else {
		$(".editAccPwdError").css("visibility","hidden");
	}
}

function uploadIMG(){
	$("#editAccImgUpload").click();
}
/*END OF register.html*/

/*searchUser.html*/
function searchUsers(){
	var str = $("#searchUsers").val();
	if (str == "") {
		$("#searchUsers").css("background-color","red");
		return false;
	}
	$("#searchUsers").css("background-color","white");
}
/*END OF searchUser.html*/