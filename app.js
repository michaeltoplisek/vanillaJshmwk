$(".view").on("click", function () {
    $(".mainContain").empty();
    for (let i = 0; i < employeeList.length; i++) {
        const nameShow = employeeList[i].name
        const officeShow = employeeList[i].officeNum
        const phoneShow = employeeList[i].phoneNum
        $(".viewBtn").append(`<p>Name: ${nameShow}<br />Office Number: ${officeShow}<br />Phone Number: ${phoneShow}</p>`);
    }
})

$(".add").on("click", function () {
    $(".mainContain").empty();
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
        "name": newName,
        "officeNum": newOffice,
        "phoneNum": newPhone,
    }
    employeeList.push(newEmployee)
})
