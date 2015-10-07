    var githubhook = require('githubhook');
    // configure listener for github changes
    var github = githubhook({/* options */
		   host: "localhost",
       port: 8097,
       path: "/pushchanges",
       secret: "123456"  
	  });

    // listen to push on github on branch master
    /*github.on('push', function (repo, ref, data) {
    console.log("Listening Push from GitHub");
		  var branchName = _s.strRightBack(ref, "/");
		  var fullNameRepository = data.repository.full_name;
		  console.log("fullNameRepository"+fullNameRepository);
		  var removedFilesArray = data["head_commit"]["removed"];
		  var addedFilesArray = data["head_commit"]["added"];
		  var modifiedFilesArray = data["head_commit"]["modified"];
    });*/
    
    github.on('push', function (event) {
  console.log('Received a push event for %s to %s',
    event.payload.repository.name,
    event.payload.ref)
});

    // listen to github push
    github.listen();