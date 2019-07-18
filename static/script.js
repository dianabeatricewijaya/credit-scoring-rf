$(document).ready(function(){

	// set timeout for loading section
	setTimeout(function(){
		$("#loading").css("display", "none");
		$("#one").css("display", "block");
	}, 3000);

	// show and hide sections = array of all div sections, on next click show next array index, on back show previous array index
	var page_index = ["#one", "#two", "#three", "#four", "#five", "#six", "#seven", "#eight", "#nine", "#ten", "#eleven", "#twelve", "#thirteen", "#fourteen", "#fiveteen", "#sixteen", "#seventeen"];
	var page_counter = 1;
	var index_length = page_index.length;

	// implement show next section function
	function nextPage() {
		// show the next page
		var next_page = page_index[page_counter];	
		$(next_page).css("display", "block");
		console.log("current Section: " + next_page);

		// hide all other pages
		for (let i = 0; i < index_length; i++) {
			if (page_index[i] == page_index[page_counter]) {
				continue;
			} else {
				$(page_index[i]).css("display", "none");
			}
		}

		// increment the page counter
		page_counter += 1;
	}

	// implement show previous section
	$(".backBtns").click(function() {
		// decrease the page counter by 2 to go back
		page_counter -= 2;

		// show the previous page
		let next_page = page_index[page_counter];
		$(next_page).css("display", "block");
		console.log("current Section: " + next_page);

		// hide all other pages
		for (let i = 0; i < index_length; i++) {
			if (page_index[i] == page_index[page_counter]) {
				continue;
			} else {
				$(page_index[i]).css("display", "none");
			}
		}

		// increment the page counter
		page_counter += 1;
	});

	// implement error checking page by page, if correct fire nextPage function
	$("#nextOne").click(function() {
		nextPage();
	});

	// function to validate if string contains numbers
	function isNumeric(n) {
		return !isNaN(parseFloat(n)) && isFinite(n);
	  }
	
	// validate agama
	$("#nextTwo").click(function() {
		let selected = $('select[name=agama] option:selected').val();
		if (selected == "" || selected == null) {
			$('select[name=agama]').addClass("is-invalid").next().css("display", "block");
		} else {
			$('select[name=agama]').addClass("is-valid").removeClass("is-invalid").next().css("display", "none");
			nextPage();
		}
	});

	// validate agama - remove warning
	$('select[name=agama]').change(function() {
		$(this).addClass("is-valid").removeClass("is-invalid");
		$("#agamaWarning").css("display", "none");
	});

	// req_principal
	$("#nextThree").click(function() {
		let req_principal = $('#req_principal').val();
		if (req_principal == null || isNaN(req_principal) == true || req_principal == "") {
			$('#req_principal').addClass("is-invalid").next().css("display", "block");
		} else if (Number(req_principal) < 1000000 || Number(req_principal) > 10000000) {
			$('#req_principal').addClass("is-invalid").next().next().css("display", "block");
		} 
		else {
			$('#req_principal').addClass("is-valid").removeClass("is-invalid").next().css("display", "none");
			$('#req_principal').next().next().css("display", "none");
			nextPage();
		}
	});

	// Period Count
	$("#nextFour").click(function() {
		let period = $('#period').val();
		if (period == null || isNaN(period) == true || period == "") {
			$('#period').addClass("is-invalid").next().css("display", "block");
		} else if (Number(period) < 1 || Number(period) > 30) {
			$('#period').addClass("is-invalid").next().next().css("display", "block");
		} 
		else {
			$('#period').addClass("is-valid").removeClass("is-invalid").next().css("display", "none");
			$('#period').next().next().css("display", "none");
			nextPage();
		}
	});

	// validate sex
	$('#nextFive').click(function() {
		let sex = $('input[name=gender]:checked').val();
		if (sex == null || sex == undefined) {
			$('#genderWarning').css("display", "block");
		} else {
			$('#genderWarning').css("display", "none");	
			nextPage();
		}
	});

	// Pendidikan Terakhir
	$('#nextSix').click(function() {
		let grad = $('input[name=grad]:checked').val();
		if (grad == null || grad == undefined) {
			$('#classWarning').css("display", "block");
		} else {
			$('#classWarning').css("display", "none");	
			nextPage();
		}
	});

	// Lama Bekerja
	$("#nextSeven").click(function() {
		let length_emp = $('#length_emp').val();
		if (length_emp == null || isNaN(length_emp) == true || length_emp == "") {
			$('#length_emp').addClass("is-invalid").next().css("display", "block");
		} else if (Number(length_emp) < 0 || Number(length_emp) > 6) {
			$('#length_emp').addClass("is-invalid").next().next().css("display", "block");
		} 
		else {
			$('#length_emp').addClass("is-valid").removeClass("is-invalid").next().css("display", "none");
			$('#length_emp').next().next().css("display", "none");
			nextPage();
		}
	});

	// validate sex
	$('#nextEight').click(function() {
		let sex = $('input[name=genderRef]:checked').val();
		if (sex == null || sex == undefined) {
			$('#genderRefWarning').css("display", "block");
		} else {
			$('#genderRefWarning').css("display", "none");	
			nextPage();
		}
	});

	// gross_sal
	$("#nextNine").click(function() {
		let gross_sal = $('#gross_sal').val();
		if (gross_sal == null || isNaN(gross_sal) == true || gross_sal == "") {
			$('#gross_sal').addClass("is-invalid").next().css("display", "block");
		} else if (Number(gross_sal) < 1000000 || Number(gross_sal) > 100000000) {
			$('#gross_sal').addClass("is-invalid").next().next().css("display", "block");
		} 
		else {
			$('#gross_sal').addClass("is-valid").removeClass("is-invalid").next().css("display", "none");
			$('#gross_sal').next().next().css("display", "none");
			nextPage();
		}
	});

		
	// validate Residence
	$("#nextTen").click(function() {
		let residence = $('select[name=residence] option:selected').val();
		if (residence == "" || residence == null) {
			$('select[name=residence]').addClass("is-invalid").next().css("display", "block");
		} else {
			$('select[name=residence]').addClass("is-valid").removeClass("is-invalid").next().css("display", "none");
			nextPage();
		}
	});

	// validate Status
	$('#nextEleven').click(function() {
		let marital = $('input[name=marital]:checked').val();
		if (marital == null || marital == undefined) {
			$('#maritalWarning').css("display", "block");
		} else {
			$('#maritalWarning').css("display", "none");	
			nextPage();
		}
	});

	// validate family size
	$('#nextTwelve').click(function() {
		let family = $('#inputFamily').val();
		if (family == null || family == undefined || family == "") {
			$('#inputFamily').addClass("is-invalid");
			$('#familyWarning').css("display", "block");
		} else {
			$('#inputFamily').addClass("is-valid").removeClass("is-invalid");
			$('#familyWarning').css("display", "none");
			
			nextPage();
		}
	});
	// Umur

	$("#nextThirteen").click(function() {
		let age = $('select[name=age] option:selected').val();
		console.log(age)
		if (age == "" || age == null) {
			$('select[name=age]').addClass("is-invalid").next().css("display", "block");
		} else {
			$('select[name=age]').addClass("is-valid").removeClass("is-invalid").next().css("display", "none");
			nextPage();
		}
	});
	$('select[name=age]').change(function() {
		$(this).addClass("is-valid").removeClass("is-invalid");
		$("#ageWarning").css("display", "none");
	});


	// validate Business
	$('#nextFourteen').click(function() {
		let business = $('input[name=business]:checked').val();
		console.log(business)
		if (business == null || business == undefined) {
			$('#businessWarning').css("display", "block");
		} else {
			$('#businessWarning').css("display", "none");	
			nextPage();
		}
	});

	$('select[name=business]').change(function() {
		$(this).addClass("is-valid").removeClass("is-invalid");
		$("#businessWarning").css("display", "none");
	});

	// Ref Rel
	$('#nextFiveteen').click(function() {
		let ref_rel = $('input[name=ref_rel]:checked').val();
		console.log(ref_rel)
		if (ref_rel == null || ref_rel == undefined) {
			$('#ref_relWarning').css("display", "block");
		} else {
			$('#ref_relWarning').css("display", "none");	
			nextPage();
		}
	});
	
	$('select[name=ref_rel]').change(function() {
		$(this).addClass("is-valid").removeClass("is-invalid");
		$("#ref_relWarning").css("display", "none");
	});
	
	// validate Status Kerja
	$('#nextSixteen').click(function() {
		let job = $('input[name=job]:checked').val();
		console.log(job)
		if (job == null || job == undefined) {
			$('#joblWarning').css("display", "block");
		} else {
			$('#jobWarning').css("display", "none");	
			nextPage();
			confirmation();
		}
	});

	$('select[name=job]').change(function() {
		$(this).addClass("is-valid").removeClass("is-invalid");
		$("#jobWarning").css("display", "none");
	});
	

	// function to gather entered details for confirmation page
	function confirmation() {

		// populate confirmation page details
		$("#confirmAgama").html("Agama calon peminjam :<b>" + $("select[name=agama] option:selected").text() + "</b>");
		$("#confirmPrincipal").html("Jumlah uang yang ingin dipinjam : <b>" + $("#req_principal").val() + "</b>");
		$("#confirmPeriod").html("Lama peminjam mengembalikan uang : <b>" + $("#period").val() + "</b> hari");
		$("#confirmSex").html("Jenis kelamin peminjam : <b>" + $('input[name="gender"]:checked + label').text() + "</b>");
		$("#confirmClass").html("Pendidikan terakhir peminjam : <b>" + $('input[name="grad"]:checked + label').text() + "</b>");
		$("#confirmKerja").html("Lama peminjam bekerja di perusahaannya saat ini : <b>" + $("#length_emp").val() + "</b>");
		$("#confirmRefGender").html("Jenis kelamin referensi peminjam : <b>"+ $('input[name="genderRef"]:checked + label').text() + "</b>");
		$("#confirmGaji").html("Gaji (Gross) Peminjam : <b> " +  $("#gross_sal").val() + "</b>");
		$("#confirmResidence").html("Status kepemilikan tempat tinggal : <b>" + $("select[name=residence] option:selected").text() + "</b>");
		$("#confirmMarital").html("Status Peminjam : <b>" + $('input[name="marital"]:checked + label').text() + "</b>");
		$("#confirmAnak").html("Jumlah anak calon peminjam : <b>" + $("#inputFamily").val() + "</b> anak");
		$("#confirmEmpStat").html("Status pekerjaan calon peminjam  : <b>" +  $('input[name="job"]:checked + label').text() + "</b>");
		$("#confirmBusiness").html("Bidang pekerjaan calon peminjam : <b>" +  $('input[name="business"]:checked + label').text()  + "</b>");
		$("#confirmRefRel").html("Hubungan calon peminjam dengan referensi : <b>" + $('input[name="ref_rel"]:checked + label').text() + "</b>");
		$("#confirmAge").html("Umur Peminjam : <b>" + $("select[name=age] option:selected").text() + "</b> tahun");
	}

	// prevent form submission on enter key
	$('form input').keydown(function(e) {
		if (e.keyCode == 13) {
			e.preventDefault();
			return false;
		}
	});

	// on final submit display loading again while server prepares data and executes model
	$("#submit").click(function() {
		$("#seventeen").css("display", "none");
		$("#loading").css("display", "block");
	});

	// redirect to analysis page from results page
	$("#nextExplain").click(function() {
		document.location.href = "/analysis";
	});
	
});