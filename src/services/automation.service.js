import AV from 'leancloud-storage'


export const automationService = {
  list
}

export function list() {
  const query = new AV.Query('Automation');
  query.equalTo('status', 2);

  return query.find()
}

export function installOk(id) {
  const automation = AV.Object.createWithoutData('Automation', id);

  automation.increment('installations', 1)
  
  return automation.save(null, {
    fetchWhenSave: true
  })
}