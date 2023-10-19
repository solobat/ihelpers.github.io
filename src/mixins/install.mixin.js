
export default {
  methods: {
    installAutomation(automation) {
      const attrs = {
        ...automation,
        id: automation.objectId
      }
      const event = new CustomEvent('iautomator', {
        detail: {
          action: 'installAutomation',
          data: attrs
        }
      });

      document.dispatchEvent(event);
    }
  }
}