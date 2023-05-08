$(document).ready(function(e){

    $("#dk").click(function() {
        $("#myModal").modal();
    });

    function KiemTraName() {
        var re = /^[A-Z][a-z]+(\s[A-Z][a-z]+)+$/;
        if ($("#txtName").val() == "") {
            $("#tbName").html("Khong duoc bo trong");
            return false
        }
        if (!re.test($("#txtName").val())){
            $("#tbName").html("Ky tu dau viet hoa");
            return false;
        }
        $("#tbName").html("*");
        return true;
    }
    $("#txtName").blur(KiemTraName);
   
    function KiemTraPass(){
        var re=/^[A-Za-z0-9(!@#$%^&*()_)]{6,20}$/;
        if($("#txtPass").val()==""){
            $("#tbPass").html("Không được bỏ trống");
            return false;
        }
        if(!re.test($("#txtPass").val())){
            $("#tbPass").html("password từ 6-20 kí tự, con số hoặc các kí tự đặc biệt");
            return false; 
        }
         $("#tbPass").html("*");
         return true;
    }
    $("#txtPass").blur(KiemTraPass);
     
    function KiemTraLaiPass(){
        if($("#txtNPass").val() != $("#txtPass").val()){
            $("#tbNPass").html("Password nhập lại không đúng");
            return false; 
        }
        $("#tbNPass").html("*");
        return true;
    }
    $("#txtNPass").blur(KiemTraLaiPass);

    function KiemTraTenDn(){
        var re=/^[A-Za-z\d]{6,24}$/;
        if($("#txtTendn").val()==""){
            $("#tbTendn").html("Không được bỏ trống");
            return false;
        }
        if(!re.test($("#txtTendn").val())){
            $("#tbTendn").html("Tên đăng nhập phải gồm 6 đến 24 kí tự");
            return false; 
        }
         $("#tbTendn").html("*");
         return true;
    }
    $("#txtTendn").blur(KiemTraTenDn);
    function KiemTraNgay(){
        if ($("#txtDate").val() == "") {
            $("#tbDate").html("Không được bỏ trống");
            return false;
        }
        var day = new Date($("txtDate").val());
        var today = new Date();
        today.setDate(today.getDate() + 3);
        if (day < today) {
            $("#tbDate").html("Phai sau ngay hien tai 3 ngay");
            return false;
        }
        $("#tbDate").html("*");
        return true;
    }
    $("#txtDate").blur(KiemTraNgay);
    
    function KiemTraMail() {
        var re = /^[a-zA-Z0-9.\_\-]+@([a-zA-Z0-9])+.\w{3}$/;
        if ($("#txtMail").val() == "") {
            $("#tbMail").html("Không được bỏ trống");
            return false
        }
        if (!re.test($("#txtMail").val())){
            $("#tbMail").html("Nhập đúng định dạng mail abc@gmail.com");
            return false;
        }
        $("#tbMail").html("*");
        return true;
    }
    $("#txtMail").blur(KiemTraMail);

    function KiemTraAdd(){
        if ($("#txtAdd").val() == ""){
            $("#tbAdd").html("Địa chỉ không được bỏ trống");
            return false;
        }
        $("#tbAdd").html("*");
        return true;
    }
    $("#txtAdd").blur(KiemTraAdd);

    function KiemTraPhone(){
        var re =/^(09\d{8}|08\d{8}|07\d{8}|05\d{8}|03\d{8}|02\d{8})$/;
        if ($("#txtPhone").val() == ""){
            $("#tbPhone").html("Không được bỏ trống");
            return false;
        }
        if (!re.test($("#txtPhone").val())){
            $("#tbPhone").html("Số điện thoại bắt đầu bằng 09,08,07,05,03,02 và gồm 10 chữ số ");
            return false;
        }
        $("tbPhone").html("*");
        return true;
    }
    $("#txtPhone").blur(KiemTraPhone);
    
    $("#btnSave").click(function(){
        if (KiemTraAdd() == true && KiemTraName() == true && KiemTraMail() == true && KiemTraNgay() == true && KiemTraPhone() == true&& KiemTraPass()== true && KiemTraLaiPass()== true && KiemTraTenDn()==true){
            row = "<tr>";
            row += "<td>" + $("#txtName").val() +"</td>";
            row += "<td>" + $("#txtTendn").val() +"</td>";
            row += "<td>" + $("#txtDate").val() +"</td>";
            row += "<td>" + $("#txtAdd").val() +"</td>";
            row += "<td>" + $("#txtMail").val() +"</td>";
            row += "<td>" + $("#txtPhone").val() +"</td>";
            row += "<td>" + $("#txtGioitinh").val() +"</td>";
            row += "</tr>";  
            $("#table").append(row);
            $("#myModal2").modal();
            $("#myModal").modal("hide");
            return false;
          
        }
        return false;
    });
    $("#btnXacNhan").click(function() {
        $("#myModal2").modal("hide");
    });

    $("#dn").click(function() {
        $("#myModal1").modal();
    });
    function KiemTraTenDnDN(){
        if($("#txtDN_Tendn").val() != $("#txtTendn").val()){
            $("#tbDN_Tendn").html("Tên đăng nhập không tồn tại");
            return false; 
        }
        $("#tbDN_Tendn").html("*");
        return true;
    }
    $("#txtDN_Tendn").blur(KiemTraTenDnDN);
    function KiemTraPassDN(){
        if($("#txtDN_Pass").val() != $("#txtPass").val()){
            $("#tbDN_Pass").html("Password sai");
            return false; 
        }
        $("#tbDN_Pass").html("*");
        return true;
    }
    $("#txtDN_Pass").blur(KiemTraPassDN);
    

    $("#btnDangnhap").click(function(){
        if (KiemTraTenDnDN() == true && KiemTraPassDN() == true ){
        
            $("#myModal1").modal("hide");
            return false;
          
        }
        return false;
    });
});