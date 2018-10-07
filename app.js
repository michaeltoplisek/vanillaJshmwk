const showView = function () {
    $(".viewBtn").empty()
    $("#viewID").removeClass("hide")
    $("#addID").addClass("hide")
    $("#verifyID").addClass("hide")
    $("#updateID").addClass("hide")
    $("#deleteID").addClass("hide")
    $("#inputLine").addClass("hide")
    $("#verifyTextID").addClass("hide")
    for (let i = 0; i < employeeList.length; i++) {
        const nameShow = employeeList[i].name
        const officeShow = employeeList[i].officeNum
        const phoneShow = employeeList[i].phoneNum
        $(".viewBtn").append(`<div><p>Name: ${nameShow}<br />Office Number: ${officeShow}<br />Phone Number: ${phoneShow}</p></div>`);
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
    $("#verifyTextID").addClass("hide")
    for (let i = 0; i < employeeList.length; i++) {
        const nameShow = employeeList[i].name
        const officeShow = employeeList[i].officeNum
        const phoneShow = employeeList[i].phoneNum
        $(".addBtn").append(`<div><p>Name: ${nameShow}<br />Office Number: ${officeShow}<br />Phone Number: ${phoneShow}</p></div`);
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

const showVerify = function () {
    $("#verifyID").empty()
    $("#viewID").addClass("hide")
    $("#addID").addClass("hide")
    $("#verifyID").removeClass("hide")
    $("#updateID").addClass("hide")
    $("#deleteID").addClass("hide")
    $("#inputLine").addClass("hide")
    $("#verifyTextID").removeClass("hide")
}

const verifyButton = function () {
    $("#verifyID").empty()
    let search = $("#verifyText").val()
    for (let i = 0; i < employeeList.length; i++) {
        if (search === employeeList[i].name) {
            $("#verifyID").append("Employee exists")
            break
        } else {
            $("#verifyID").append("Employee doesn't exist")
        }
    }
}
$(".verify").on("click", showVerify)
$("#verifyButton").on("click", verifyButton)