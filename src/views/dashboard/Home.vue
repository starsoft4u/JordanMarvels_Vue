<template>

      <div class="main-container w-100">
        <div class="w-100 flex-container flex-between mb-3">
          <div class="sub-box flex-container flex-between">
            <div>
              <img src="../../assets/images/ic_visitors.svg" />
            </div>
            <div class="flex-container flex-column flex-between">
              <div>
                <span class="type">Today Visitors</span>
                <br />
                <span class="value">20,000</span>
              </div>
              <div>
                <button>
                  <span>Veiew details</span>&nbsp;
                  <img src="../../assets/images/ic-arrow-right.svg" />
                </button>
              </div>
            </div>
          </div>
          <div class="sub-box flex-container flex-between">
            <div>
              <img src="../../assets/images/ic_earnings.svg" />
            </div>
            <div class="flex-container flex-column flex-between">
              <div>
                <span class="type">Today Earnings</span>
                <br />
                <span class="value">$10,000</span>
              </div>
              <div>
                <button>
                  <span>Veiew details</span>&nbsp;
                  <img src="../../assets/images/ic-arrow-right.svg" />
                </button>
              </div>
            </div>
          </div>
          <div class="sub-box flex-container flex-between">
            <div>
              <img src="../../assets/images/ic_calendar.svg" />
            </div>
            <div class="flex-container flex-column flex-between">
              <div>
                <span class="type">Today bookings</span>
                <br />
                <span class="value">4,525</span>
              </div>
              <div>
                <button>
                  <span>Veiew details</span>&nbsp;
                  <img src="../../assets/images/ic-arrow-right.svg" />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="w-100 flex-container flex-between mb-3">
          <div class="sub-box flex-container flex-between">
            <div>
              <img src="../../assets/images/ic_email_brown.svg" />
            </div>
            <div class="flex-container flex-column flex-between">
              <div>
                <span class="type">Today Inquires </span>
                <br />
                <span class="value">4,300</span>
              </div>
              <div>
                <button>
                  <span>Veiew details</span>&nbsp;
                  <img src="../../assets/images/ic-arrow-right.svg" />
                </button>
              </div>
            </div>
          </div>
          <div class="sub-box flex-container flex-between">
            <div>
              <img src="../../assets/images/ic_totalusers.svg" />
            </div>
            <div class="flex-container flex-column flex-between">
              <div>
                <span class="type">Total users</span>
                <br />
                <span class="value">36,000</span>
              </div>
              <div>
                <button>
                  <span>Veiew details</span>&nbsp;
                  <img src="../../assets/images/ic-arrow-right.svg" />
                </button>
              </div>
            </div>
          </div>
          <div class="sub-box flex-container flex-between">
            <div>
              <img src="../../assets/images/ic_newusers.svg" />
            </div>
            <div class="flex-container flex-column flex-between">
              <div>
                <span class="type">New users</span>
                <br />
                <span class="value">2,541</span>
              </div>
              <div>
                <button>
                  <span>Veiew details</span>&nbsp;
                  <img src="../../assets/images/ic-arrow-right.svg" />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div class="flex-container grid-header form-inline">
            <div style="flex:40"></div>
            <div class="grid-th" style="flex:760">Country Name</div>
            <div class="grid-th" style="flex:145">No. of Users</div>
          </div>
          <div class="grid-body">
            <div class="grid-row flex-container form-inline">
              <div style="flex:40"></div>
              <div style="flex:80">
                <img src="../../assets/flags/QA.png" />
              </div>
              <div class="country-cell" style="flex:680">Qatar</div>
              <div class="value-cell" style="flex:145">36,00325</div>
            </div>
            <div class="grid-row flex-container form-inline">
              <div style="flex:40"></div>
              <div style="flex:80">
                <img src="../../assets/flags/GB.png" />
              </div>
              <div class="country-cell" style="flex:680">United Kindom</div>
              <div class="value-cell" style="flex:145">20,00325</div>
            </div>
            <div class="grid-row flex-container form-inline">
              <div style="flex:40"></div>
              <div style="flex:80">
                <img src="../../assets/flags/AU.png" />
              </div>
              <div class="country-cell" style="flex:680">Australia</div>
              <div class="value-cell" style="flex:145">18,00325</div>
            </div>
            <div class="grid-row flex-container form-inline">
              <div style="flex:40"></div>
              <div style="flex:80">
                <img src="../../assets/flags/US.png" />
              </div>
              <div class="country-cell" style="flex:680">United Sates of America</div>
              <div class="value-cell" style="flex:145">10,00325</div>
            </div>
            <div class="grid-row flex-container form-inline">
              <div style="flex:40"></div>
              <div style="flex:80">
                <img src="../../assets/flags/SA.png" />
              </div>
              <div class="country-cell" style="flex:680">Saudi Arabia</div>
              <div class="value-cell" style="flex:145">25,0000</div>
            </div>
            <div class="grid-row flex-container form-inline">
              <div style="flex:40"></div>
              <div style="flex:80">
                <img src="../../assets/flags/ZA.png" />
              </div>
              <div class="country-cell" style="flex:680">South Aferica</div>
              <div class="value-cell" style="flex:145">525,000</div>
            </div>
            <div class="grid-row flex-container form-inline">
              <div style="flex:40"></div>
              <div style="flex:80">
                <img src="../../assets/flags/IL.png" />
              </div>
              <div class="country-cell" style="flex:680">Israel</div>
              <div class="value-cell" style="flex:145">20,00325</div>
            </div>
            <div class="form-inline flex-container flex-center">
              <button class="view-all">View all Countries</button>
            </div>
          </div>
        </div>
      </div>
</template>

<script>

export default {
  name: "Home",
  components: {
  },
  data() {
    return {
    };
  },
  methods: {
    search() {
      console.log("search");
    },
    handleSelect(key, keyPath, el) {
      console.log(key, keyPath, el);
    }
  }
};
</script>
<style lang="scss" scoped>
.right-container {
  flex: 1;

  .main-container {
    background-color: #f2f2f2;
    flex: 1;
    padding: 102px 88px 35px 106px;
    .sub-box {
      width: 305px;
      height: 187px;
      padding: 32px 53px 27px 33px;
      background: #ffffff;
      box-shadow: 3px 3px 4px rgba(212, 212, 212, 0.268985);
      .type {
        font-family: Open Sans;
        font-style: normal;
        font-weight: normal;
        font-size: 12px;
        line-height: 16px;

        color: #50473c;
      }
      .value {
        font-family: Open Sans;
        font-style: normal;
        font-weight: 600;
        font-size: 34px;
        line-height: 46px;
        text-transform: uppercase;

        color: #50473c;
      }
      button {
        height: 44px;
        width: 142px;
        background: #ffffff;
        border: 1px solid #c7b299;
        box-sizing: border-box;
        border-radius: 6px;
        span {
          font-family: Open Sans;
          font-style: normal;
          font-weight: bold;
          font-size: 12px;
          line-height: 16px;
          letter-spacing: 0.5px;
          text-transform: uppercase;

          color: #c7b299;
        }
      }
    }
    .grid-header {
      height: 58px;
      background: rgba(199, 178, 153, 0.0898164);
      border: 1px solid rgba(80, 71, 60, 0.1);
      box-sizing: border-box;
      .grid-th {
        font-family: Open Sans;
        font-style: normal;
        font-weight: bold;
        font-size: 12px;
        line-height: 16px;

        color: #50473c;
      }
    }
    .grid-body {
      background: #ffffff;
      box-shadow: 3px 3px 4px rgba(212, 212, 212, 0.268985);
      .grid-row {
        height: 54px;
        border-bottom: 1px solid rgba(204, 165, 117, 0.313839);
        .country-cell {
          font-family: Open Sans;
          font-style: normal;
          font-weight: normal;
          font-size: 12px;
          line-height: 16px;

          color: #50473c;
        }
        .value-cell {
          font-family: Open Sans;
          font-style: normal;
          font-weight: 600;
          font-size: 12px;
          line-height: 16px;

          color: #50473c;
        }
      }
      button.view-all {
        background: #ffffff;
        border: 1px solid #c7b299;
        box-sizing: border-box;
        border-radius: 6px;

        padding:14px 21px;
        margin:21px auto;

        font-family: Open Sans;
        font-style: normal;
        font-weight: bold;
        font-size: 12px;
        line-height: 16px;
        text-align: center;
        letter-spacing: 0.5px;
        text-transform: uppercase;

        color: #c7b299;
      }
    }
  }
}

</style>
