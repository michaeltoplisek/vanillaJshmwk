const showView = function() {
    $(".viewBtn").empty()
    $("#viewID").removeClass("hide")
    $("#addID").addClass("hide")
    $("#verifyID").addClass("hide")
    $("#updateID").addClass("hide")
    $("#deleteID").addClass("hide")
    $("#inputLine").addClass("hide")
    for (let i = 0; i < employeeList.length; i++) {
        const nameShow = employeeList[i].name
        const officeShow = employeeList[i].officeNum
        const phoneShow = employeeList[i].phoneNum
        $(".viewBtn").append(`<p>Name: ${nameShow}<br />Office Number: ${officeShow}<br />Phone Number: ${phoneShow}</p>`);
    }
}

$(".view").on("click", showView)

const showAdd = function () {
    $(".addBtn").empty()
    $("#viewID").addClass("hide")
    $("#addID").removeClass("hide")
    $("#verifyID").addClass("hide")
    $("#updateID").addClass("hide")
    $("#deleteID").addClass("hide")
    $("#inputLine").removeClass("hide") 
    for (let i = 0; i < employeeList.length; i++) {
        const nameShow = employeeList[i].name
        const officeShow = employeeList[i].officeNum
        const phoneShow = employeeList[i].phoneNum
        $(".addBtn").append(`<p>Name: ${nameShow}<br />Office Number: ${officeShow}<br />Phone Number: ${phoneShow}</p>`);
    }  
    const newName = $(".nameInput").val()
    const newOffice = $(".officeInput").val()
    const newPhone = $(".phoneInput").val()
    const newEmployee = {
        'name': `${newName}`,
        'officeNum': `${newOffice}`,
        'phoneNum': `${newPhone}`,
    }
    employeeList.push(`${newEmployee}`) 
}

$(".add").on("click", showAdd)

const showVerify = function() {
    $(".verifyBtn").empty()
    $("#viewID").addClass("hide")
    $("#addID").removeClass("hide")
    $("#verifyID").removeClass("hide")
    $("#updateID").addClass("hide")
    $("#deleteID").addClass("hide")
    $("#inputLine").addClass("hide") 
}
