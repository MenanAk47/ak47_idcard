$(document).ready(function() {
    window.addEventListener('message', function(event) {
        if (event.data.action == 'open') {
            var type = event.data.type;
            var userData = event.data.array;
            var sex = userData.sex;
            if (sex.toLowerCase() == 'm') {
                $('img').attr('src', 'assets/images/male.png');
                $('#sex').text('male');
            } else {
                $('img').attr('src', 'assets/images/female.png');
                $('#sex').text('female');
            }
            if (type != 'id_card'){
                $('#licenses').text('Verified');
            }
            $('#dob').text(userData.dateofbirth);
            $('#height').text(userData.height);
            $('#signature').text(userData.firstname + ' ' + userData.lastname);
            $('#id-card').css('background', 'url(assets/images/'+ type +'.png)');
            $('#id-card').show();
        } else if (event.data.action == 'close') {
            $('#name').text('');
            $('#dob').text('');
            $('#height').text('');
            $('#signature').text('');
            $('#sex').text('');
            $('#id-card').hide();
            $('#licenses').html('');
        }
    });
});