<template>
  <div class="page-privacy">
    <div class="container">
      <div class="items">
        <div class="item">
          <div class="item-q">{{$t("What information does iHelpers collect?")}}</div>
          <div class="item-a">{{$t("iHelpers does not collect any user information")}}</div>
        </div>
        <div class="item">
          <div class="item-q">{{$t("What browser permissions does iHelpers require?")}}</div>
          <div class="item-a">
            <p>- {{$t("Reading browsing records")}}</p>
            <p>- {{$t("Notification")}}</p>
          </div>
        </div>
        <div class="item">
          <div class="item-q">{{$t("Why iHelpers needs these permissions?")}}</div>
          <div class="item-a">
            <div class="item-sq">
              {{$t("Reading browsing records")}}: 
            </div>
            <div class="item-a">
              <p>{{$t("iHelpers is a uniserval extension.")}}</p>
              <p>{{$t("It can work on any page, as long as the user uses shortcut keys, right-click menu to call it. ")}}</p>
              <p>{{$t("Besides, iHelpers will also monitor the changes of tabs. When the link of one tab matches the user-configured automation's pattern, it will automatically execute the action of the automation.")}}</p>
            </div>
            <div class="item-sq">{{$t("Notification")}}:</div>
            <div class="item-a">
              <p>{{$t("Users can install automations from ihelpers.io and will receive notifications from iHelpers when the installation succeeds or fails.")}}</p>
            </div>
          </div>
        </div>
        <div class="item">
          <div class="item-q">
            {{$t("Where is iHelpers's data stored?")}}
          </div>
          <div class="item-a">
            <p>{{$t("iHelpers uses IndexDB to store data, which is a form of offline data storage.")}}</p>
            <p>{{$t("iHelpers does not upload data to the cloud.")}}</p>
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