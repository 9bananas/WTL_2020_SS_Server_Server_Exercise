var fs = require('fs');

module.exports = {
    check_lists: function (list_file_path, data_lists) {
        for (list of data_lists) {

            var path = list_file_path + list + '.json';
            //checks the existence of lists
            if (fs.existsSync(path) == false) {
                fs.writeFileSync(path);
                console.log('generated ' + list + '!');
            }
            else if (fs.existsSync(path) == true) {
                console.log('found ' + list + '!');
            }
        }
    },
    test_check_lists: function () {
        var user_list_existence_check = fs.existsSync(user_list_file_path);
        console.log(user_list_existence_check);
    }
}