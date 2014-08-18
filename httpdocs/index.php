<?php
if (isset($_POST['submit'])) {
	header( "Location: home" );
}
$pagetitle = "Welcome";
$loggedin = false;
$bgfilter = "";
$gradientoverlay = false;
$coloroverlay = false;


?>
<?php include_once("inc/header.php"); ?>
	<header id="header">


	    <div class="slides owl-carousel js-welcome-carousel">
	    	<div class="slide">

	    		<div class="bg <?php echo $bgfilter; ?>" style="background-image:url('_assets/img/background-1.jpg');" <?php /* data-top="background-position: 50% 50%;" data-top-bottom="background-position: 50% 15%;"*/ ?>></div>
	    		<div class="grad-overlay"></div>
	    		<div class="color-overlay"></div>
	    		<div class="landing-wrap valign">
	    		    
	    		    <div class="mid">
	    		        <div class="welcome">
	    		           	<h1>YOUR MOMENTS. YOUR STORY.</h1>
	    		            <h2>YOUR ONLINE ADVENTURE PLATFORM</h2>
	    		        </div>
	    		    </div>
	    		</div>

	    	</div>
	    	<div class="slide">
	    		<div class="bg <?php echo $bgfilter; ?>" style="background-image:url('_assets/img/background-2.jpg');" <?php /* data-top="background-position: 50% 50%;" data-top-bottom="background-position: 50% 15%;"*/ ?>></div>
	    		<div class="grad-overlay"></div>
	    		<div class="color-overlay"></div>
	    		<div class="landing-wrap valign">
	    		    
	    		    <div class="mid">
	    		        <div class="welcome">
	    		           	<h1>SHARE YOUR ADVENTURE</h1>
	    		            <h2>CAPTURE YOUR LIFE'S MOST ADVENTUROUS MOMENTS &amp; INSPIRE A GLOBAL COMMUNITY</h2>
	    		        </div>
	    		    </div>
	    		   	
	    		</div>
	    	</div>
	    	<div class="slide">
	    		<div class="bg <?php echo $bgfilter; ?>" style="background-image:url('_assets/img/background-3.jpg');" <?php /* data-top="background-position: 50% 50%;" data-top-bottom="background-position: 50% 15%;"*/ ?>></div>
	    		<div class="grad-overlay"></div>
	    		<div class="color-overlay"></div>
	    		<div class="landing-wrap valign">
	    		    
	    		    <div class="mid">
	    		        <div class="welcome">
	    		           	<h1>CHALLENGE YOUR LIMITS</h1>
	    		            <h2>JOIN YOUR FRIENDS &amp; COMPETE WITH OTHER ADVENTURERS AROUND THE GLOBE</h2>
	    		        </div>
	    		    </div>
	    		   	
	    		</div>
	    	</div>
	    	<div class="slide">
	    		<div class="bg <?php echo $bgfilter; ?>" style="background-image:url('_assets/img/background-4.jpg');" <?php /* data-top="background-position: 50% 50%;" data-top-bottom="background-position: 50% 15%;"*/ ?>></div>
	    		<div class="grad-overlay"></div>
	    		<div class="color-overlay"></div>
	    		<div class="landing-wrap valign">
	    		    
	    		    <div class="mid">
	    		        <div class="welcome">
	    		           	<h1>THE JOURNEY IS THE REWARD</h1>
	    		            <h2>BUT AS A LITTLE EXTRA, EARN THE CHANCE TO WIN AWESOME PRODUCTS &amp; ONCE IN A LIFETIME EXPERIENCES</h2>
	    		           
	    		        </div>
	    		    </div>
	    		   	
	    		</div>
	    	</div>
	    </div>

	    <a href="carousel-arrows next"></a>

	    
	    <div class="newsletter">
	    	<p>WANT TO HELP US TEST?<br/>SIGN UP TO OUR MAILING LIST TO TAKE PART</p>
		    <form class="form js-newsletter-signup group" action="inc/newsletter.php" method="post">
		    	
		    		<input type="email" class="input input-text email" placeholder="EMAIL ADDRESS" id="email" name="email" />
		    		<input type="submit" class="input btn subscribe-btn" value="Subscribe" name="submit" />
		    		
		    </form>
		    <div class="js-newsletter-confirm">
		    	<br/>
		    	<p>THANKS FOR SIGNING UP!</p>
		   	</div>
	    </div>

	    <a href="/" class="btn header-btn logo">KOA</a>
	    <span class="btn header-btn soon-btn">LAUNCHING SOON</span>

	</header>
	
<?php include_once("inc/footer.php"); ?>
