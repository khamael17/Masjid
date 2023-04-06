
<form class="mb-2">
<div class="card bg-light">
    <img class="card-img-top" src="/img/Daycare1.jpg" alt="Card image cap"/>
    <div class="card-body">
      <h5 class="card-title">@prog.AftSchoolProgramTitle</h5>
      <p class="card-text">@prog.AftSchoolProgramDesc</p>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item bg-light"> <h6 class="youth-card">Guest: <u>@prog.AftSchoolProgramGuest</u></h6></li>
      <li class="list-group-item bg-light"><h6 class="youth-card">Price: <span class="  imam-nav-name ">@prog.AftSchoolProgramPrice</span></h6></li>
      <li class="list-group-item bg-light"><h6 class="youth-card">Time: <span class="  imam-nav-name ">@prog.AftSchoolProgramTime</span></h6></li>
        <li class="list-group-item bg-light"><h6 class="youth-card">Place: <span class="  imam-nav-name "> @prog.AftSchoolProgramPlace</span></h6></li>
    </ul>
    <div class="card-body">
<a id="btnRegister" class="card-link btn btn-success" onclick="register(@prog.AftSchoolProgramTitle)">Register</a>
<a id="btnDelete" class="card-link btn btn-danger" onclick="remov(@prog.AftSchoolProgramId)">Delete</a>
    </div>
  </div>
</form>