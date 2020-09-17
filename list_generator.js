var fs = require('fs');

//makes the following functions avaialable in other files
module.exports = {
    //checks if all the lists defined in 'data_lists' are present. if any are missing, it generates the missing ones as empty files.
    check_lists: function (list_file_path, data_lists) {
        for (list of data_lists) {

            var path = list_file_path + list + '.json';
            //checks the existence of lists
            if (fs.existsSync(path) == false) {
                //generates a missing list
                fs.writeFile(path, '', function (err) {
                    if (err) throw err;
                    console.log('generated ' + list + '!');
                });
            }
            //sends a message to console if a list was found
            else if (fs.existsSync(path) == true) {
                console.log('found ' + list + '!');
            }
        }
    },
    //test function, please ignore
    test_check_lists: function () {
        var user_list_existence_check = fs.existsSync(user_list_file_path);
        console.log(user_list_existence_check);
    }
}