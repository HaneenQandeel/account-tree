<template>
  <div class="profile">
    <h2 class="text-center">Register as A Trader</h2>
    <p>You are just steps away from creating your account</p>
    <b-card no-body>
      <b-tabs pills >
        <b-tab title="1" class="nav-link active"><h4 class="active">Basic Information</h4>
          <b-card-text>
            <form id="form">
              <div class="row form-profile">
                <div class="col-md-6 col-sm-3">
                  <div class="trader-name">
                    <label>Trader Name</label>
                    <input
                      id="name"
                      name="name"
                      class="form-control"
                      type="text"
                      v-model.trim="$v.name.$model"
                      :class="{
                        'is-invalid': $v.name.$error,
                        'is-valid': !$v.name.$invalid,
                      }"
                    />
                    <div class="valid-feedback">
                      <span>Trader Name is Valid!</span>
                    </div>
                    <div class="invalid-feedback">
                      <span v-if="!$v.name.required"
                        >Trader Name is required</span
                      >
                      <span v-if="!$v.name.minLength"
                        >Trader Name must have at least
                        {{ $v.name.$params.maxLength.max }} letters</span
                      >
                    </div>
                  </div>
                  <div class="state">
                    <label>State</label>
                   <select class="custom-select mr-sm-2" v-model="state">
                    <option value="">Choose State</option>
                    <option></option>
                  </select>
                  </div>
                </div>

                <div class="col-md-6 col-sm-3">
                  <div class="country">
                    <label>Country</label>
                    <select class="custom-select mr-sm-2" v-model="country">
                      <option value="">Choose Country</option>
                      <option v-for="(countries, index) in countryData.resources" :key="index">{{countries.code}}</option>
                   </select>
                    <div class="invalid-feedback">
                      <span v-if="!$v.country.required" style="float: left;"
                        >Country is required</span
                      >
                    </div>
                  </div>
                  <div class="commercial">
                    <label>Commercial Register</label>
                    <input
                      class="form-control"
                      type="text"
                      v-model="commercial"
                    />
                  </div>
                </div>
              </div>
              <div class="phone">
                <label style="float:left;">Phone Number</label>
                <input
                  class="form-control"
                  v-model.number.lazy="$v.phone.$model"
                  :class="{
                    'is-invalid': $v.phone.$error,
                    'is-valid': !$v.phone.$invalid,
                  }"
                />
                <div class="valid-feedback">
                  <span>Phone Number is Valid!</span>
                </div>
                <div class="invalid-feedback">
                  <span v-if="!$v.phone.required" style="float: left;"
                    >Phone is required</span
                  >
                  <span v-if="!$v.phone.maxLength" style="float: left;"
                    >Phone Number must have at least
                    {{ $v.phone.$params.maxLength.max }} letters</span
                  ><br />
                  <span v-if="!$v.phone.numeric" style="float: left;"
                    >This phone number only numeric accept</span
                  >
                </div>
              </div>
              <div class="row">
                <div class="col-md-4 activity">
                  <label >Type of Activity</label>
                  <div class="activity-radio">
                    <input type="radio" v-model="prod" /> Products
                    <input type="radio" v-model="serv" /> Services
                  </div>
                </div>
                <div class="col-md-4"></div>
                <div class="col-md-4 services">
                  <label style="">Type of Services</label>
                  <v-select
                    v-model="services"
                    :options="['mm', 'ff']"
                  ></v-select>
                </div>
              </div>
              <b-button variant="info" style="margin-top: 57px;">FollowUp</b-button>
            </form>
          </b-card-text>
        </b-tab>
        <b-tab title="2" class="nav-link active"><h4 class="active"> Account Information</h4>
            <b-card-text>
                <form>
                    <div class="row form-profile">
                        <div class="col-md-12">
                        <div class="email">
                    <label>Email</label>
                    <input
                      class="form-control"
                      type="email"
                      placeholder="Example:name@gmail.com"
                      v-model.trim="$v.email.$model"
                      :class="{
                        'is-invalid': $v.email.$error,
                        'is-valid': !$v.email.$invalid,
                      }"
                    />
                    <div class="valid-feedback">
                      <span>Email is Valid!</span>
                    </div>
                    <div class="invalid-feedback">
                      <span v-if="!$v.email.required">Email is required</span>
                    
                    </div>
                  </div>
                  <div class="password">
                    <label>Password</label>
                    <input class="form-control" id="password" type="password" placeholder="************" 
                    v-model="password"  :class="{'is-invalid': $v.password.$error,'is-valid': !$v.password.$invalid }"/>
                    <i class="la la-eye"></i>
                  <div class="valid-feedback">Your Password is Valid!</div>
                  <div class="invalid-feedback">
                      <span v-if="!$v.password.required">Password is required</span>
                      <span v-if="!$v.password.minLength">
                        {{ $v.password.$params.minLength.min }} characters minimum</span>
                  </div>
                  
                  </div>
                  <div class="form-group show-password">
                      <input type="checkbox" class="form-check-input" v-model="showpassword" @click="showPassword"/>
                      <label>Show Password</label>
                  </div>
                  
                  <div class="confirm-password">
                    <label>Confirm Password</label>
                    <input class="form-control" type="password" placeholder="************" v-model.trim="confirmPassword"
                      :class="{'is-invalid': $v.confirmPassword.$error,'is-valid': !$v.confirmPassword.$invalid }"
                    />
                    <div class="valid-feedback">Your Password is identical!</div>
                    <div class="invalid-feedback">
                      <span v-if="!$v.confirmPassword.required">Password is required</span>
                      <span v-if="!$v.confirmPassword.sameAsPassword">
                       Password must be identical </span>
                    </div>
                  </div>
                </div>

                <div class="col-md-12">
                  <div class="confirm">
                      <input type="checkbox" class="confirm-correct" id="check1" v-model="confirm" style="float:left;"/>
                      <p class="pargraph">I confirm that all the above information is correct.</p>
                  </div>
                 
                </div><br>
                 <div class="col-md-12">
                  <div class="confirm-info">
                      <input type="checkbox" v-model="confirm" style="float:left;"/>
                      <p class="pargraph">I agree to all platform policies</p>
                      <a class="d-block" href="#" style="float: left; margin: 31px -222px;"> Terms and Policies </a>
                  </div>
                 
                </div>
              </div>

              <b-button variant="info" style="margin-top: 57px;">Register</b-button>
            </form>
        
            </b-card-text>
        </b-tab>
      </b-tabs>
    </b-card>
  </div>
</template>

<script>
import { required, minLength,maxLength, numeric,sameAs} from "vuelidate/lib/validators";
import country from "../json/country.json"
export default {
  data() {
    return {
      password: '',
      name: "",
      confirmPassword:"",
      confirm:"",
      prod:"",
      state: "",
      showpassword:false,
      country: "",
      countryData:country,
      commercial: "",
      services:"",
      serv:"",
      phone: "",
      email:""
    };
  },
  validations: {
    name: {
      required,
      minLength: minLength(5),
      maxLength: maxLength(15),
    },
    phone: {
      required,
      maxLength: maxLength(12),
      numeric,
    },
    email:{
      required
    },
    country: {
      required,
    },
    password:{
      required,
      minLength: minLength(8)
    },
    confirmPassword:{
      required,
      sameAsPassword: sameAs('password')
    }
  },
  methods:{
    showPassword(){
      var show = document.getElementById('password');
      if (this.showpassword == false){
        this.showPassword = true
        show.type = "text"
      }else{
        this.showPassword = false
        show.type = "password"
      }
    }
  }
}
</script>

<style>
.profile {
  margin: 25px 35px;
}
.confirm{
  margin-top:40px;
}
ul.nav-pills{
    margin-top:15px;
}
.form-profile {
  margin-top: 40px;
}
.confirm-password{
  margin-top:15px;
}
.commercial,
.state,
.phone {
  margin-top: 15px;
}
p.pargraph{
    float: left;
    margin: -5px 12px;

}
.activity {
  margin-top: 25px;
}
.nav-pills .nav-link.active, .nav-pills .show > .nav-link {
  border-radius: 100%;
  width: 100px;
  height: 80px;
  border-color:red;
  background-color:#fff !important;
  color:#000 !important;
}
h4.active{
    color:red
}
.confirm-info{
  margin-top:18px;
}
li.nav-item {
  margin-left: 140px;
}
.nav-pills .nav-link {
  border-radius: 100%;
  width: 100px;
  height: 80px;
  border-radius: 100% !important;
  color: #000;
  border: 1px solid #eee;
  padding: 21px;
  font-size: 23px;
}

.services {
  margin-top: 25px;
  margin: 16px -105px;
}
label {
  font-weight: 600;
}
.password{
  margin-top: 25px;
}
.show-password{

}
</style>
<style src="vue-slim-tabs/themes/default.css"></style>
