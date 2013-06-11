<!DOCTYPE html>
<html>
<head>
<title>Havard Website Reference Generator 2.0</title>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="stylesheet" type="text/css" href="jquery-ui-1.10.3.min.css">
<link href="bootstrap/css/bootstrap.min.css" rel="stylesheet" media="screen">
<link href="bootstrap/css/bootstrap-responsive.min.css" rel="stylesheet">
<link rel="stylesheet" type="text/css" href="default.css">

<script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-39853090-1', 'anonoz.com');
  ga('send', 'pageview');
</script>
</head>

<body>
<div class="container">

    <div class="row-fluid">
        <div class="span7">
            <form class="form-horizontal">
            <legend><h2>Havard Website Reference Generator</h2></legend>
            
            <div class="control-group">
                <label for="authorName" class="control-label">Author <br> (Lastname/Website Name):</label>
                <div class="controls">
                    <input type="text" name="authorName" value='Singh, A.'/>
                </div>
            </div><!-- END control-group -->
        
            <div class="control-group">
                <label for="yearPublished" class="control-label">Year Published (Written/Copyright year):</label>
                <div class="controls">
                    <input type="number" name="yearPublished" placeholder="" />
                </div>
            </div><!-- END control-group -->
            
            <div class="control-group">
                <label for="articleTittle" class="control-label">Article Tittle <br>(Topic being discussed)</label>
                <div class="controls">
                    <input type="text" name="articleTittle" value="Website Reference Generator" />
                </div>
            </div><!-- END control-group -->
            
            <div class="control-group">
                <label for="websiteLink" class="control-label">Website Link:</label>
                <div class="controls">
                    <input type="text" name="websiteLink" placeholder="" id="url" />
                </div>
            </div><!-- END control-group -->
            
            <div class="control-group">
                <label for="dateAccessed" class="control-label">Date Accessed :</label>
                <div class="controls">
                    <input type="text" name="dateAccessed" placeholder="19th June 2012" />
                </div>
            </div><!-- END control-group -->
        
            <div class="form-actions btn_container">
                <a class="generate_btn btn btn-primary" href="javascript:void(0)">Generate</a>
            </div>    
            </form>
            
             <!-- The div where the generated Results are displayed -->  
             <div class="row-fluid">
                 <div class="span12 resultdiv">
                </div>
            </div>
            <!-- The div where the generated Results are displayed -->
        </div>
        
        <div class="span5 info">
            <h2>Info</h2>
            <p>This is a Havard Reference Generator:</p>
            <ul>
                <li><span id="alert">Click generate to know what this thing is</span></li>
                <li>Follows 100% exact Staffordshire University Harvard Referencing System</li>
                <li>Format taken from: <a href="http://www.staffs.ac.uk/assets/harvard_quick_guide_tcm44-47797.pdf">Here</a>, page 4 <span id="alert">"Check the Link incase of Doubt"</span></li>
                <li>Bug: The copy button doesn't copy the italic format.</li>
                <li><span id="alert">Wikipedia is not accepted as valid reference by universities</span></li>
                <li><p class="text-success"><strong>Now with Bootstrap</strong></p></li>
            </ul>
        </div>
    </div>

    <div id="footer">
        <ul class="thumbnails">
            <li class="span4">
                <div class="thumbnail">
                    <h2>Made by:</h2>
                    <img src="img/armesh.jpg" alt="Armesh">
                    <a href="https://www.facebook.com/armesh.singh?ref=tn_tnmn"><h3>Armesh Singh</h3></a>
                    <p>Just some guy who's tryna make it big.</p>
                </div>
            </li>
            
            <li class="span4">
                <div class="thumbnail">
                    <h2>Hosted By:</h2>
                    <img src="img/anonoz.jpg" alt="Armesh">
                    <a href="https://www.facebook.com/anonoz"><h3>Anonoz</h3></a>
                    <p>Another cool guy who helps the previous guy.</p>
                </div>
            </li>
            
            <li class="span4">
                <div class="thumbnail">
                    <h2>Powered with:</h2>
                    <img src="img/twitter-bootstrap.jpg" alt="Armesh">
                    <a href="http://twitter.github.io/bootstrap/"><h3>Bootstrap</h3></a>
                    <p>Sleek, intuitive, and powerful front-end framework for faster and easier web development.</p>
                </div>
            </li>              
        </ul>
    </div>



</div>
<script src="js/jquery-1.9.1.js"></script>
<script src="js/jquery-ui-1.10.3.min.js"></script>
<script src="zero/ZeroClipboard.min.js"></script>
<script src="bootstrap/js/bootstrap.min.js"></script>
<script src="zero/ZeroClipboard.min.js"></script>
<script src="js/script.js"></script>
</body>
</html>