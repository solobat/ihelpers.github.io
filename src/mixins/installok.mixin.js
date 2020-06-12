import { WEB_ACTIONS } from '../constant'
import { installOk } from '../services/automation.service'

export default {
  created() {
    this.bindInstallEvents()
  },

  methods: {
    bindInstallEvents() {
      document.addEventListener('stewardHelper', (event) => {
        const { action, data } = event.detail

        switch (action) {
          case WEB_ACTIONS.INSTALL_DONE:
            this.onInstallOk(data);
            break;
          default:
            break;
        }
      })
    },

    getAutomation() {
      return null
    },

    onInstallOk(data) {
      const aid = data.id
      const am = this.getAutomation(aid)

      if (am) {
        installOk(am.installations.objectId).then(result => {
          am.installations.count = result.attributes.count
        })
      }
    },
  }
}