<template>
  <div class="page-privacy">
    <div class="container">
      <div class="items">
        <div class="item">
          <div class="item-q">{{$t("What information does iAutomator collect?")}}</div>
          <div class="item-a">{{$t("iAutomator does not collect any user information")}}</div>
        </div>
        <div class="item">
          <div class="item-q">{{$t("What browser permissions does iAutomator require?")}}</div>
          <div class="item-a">
            <p>- {{$t("Reading browsing records")}}</p>
            <p>- {{$t("Notification")}}</p>
          </div>
        </div>
        <div class="item">
          <div class="item-q">{{$t("Why iAutomator needs these permissions?")}}</div>
          <div class="item-a">
            <div class="item-sq">
              {{$t("Reading browsing records")}}: 
            </div>
            <div class="item-a">
              <p>{{$t("iAutomator is a uniserval extension.")}}</p>
              <p>{{$t("It can work on any page, as long as the user uses shortcut keys, right-click menu to call it. ")}}</p>
              <p>{{$t("Besides, iAutomator will also monitor the changes of tabs. When the link of one tab matches the user-configured automation's pattern, it will automatically execute the action of the automation.")}}</p>
            </div>
            <div class="item-sq">{{$t("Notification")}}:</div>
            <div class="item-a">
              <p>{{$t("Users can install automations from iautomator.xyz and will receive notifications from iAutomator when the installation succeeds or fails.")}}</p>
            </div>
          </div>
        </div>
        <div class="item">
          <div class="item-q">
            {{$t("Where is iAutomator's data stored?")}}
          </div>
          <div class="item-a">
            <p>{{$t("iAutomator uses IndexDB to store data, which is a form of offline data storage.")}}</p>
            <p>{{$t("iAutomator does not upload data to the cloud.")}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Privacy"
};
</script>

<style lang="scss" scoped>
@import "../styles/scss/theme.scss";

.container {
  width: 960px;
  margin: 40px auto;
  padding: 40px;
  background: #fff;
  border: 1px solid #ededed;
}

.item {
  margin-bottom: 30px;
}

.item-q {
  color: #222;
  font-size: 18px;
  font-weight: 700;
}

.item-sq {
  margin-top: 10px;
  color: #222;
  font-size: 16px;
  font-weight: 500;
}
</style>