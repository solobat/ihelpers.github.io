import AV from 'leancloud-storage'


export const automationService = {
  list
}

export function list(action, searchText) {
  const query = new AV.Query('Automation');
  query.equalTo('status', 2);

  if (action) {
    query.equalTo('type', action)
  }

  if (searchText) {
    query.contains('name', searchText);
  }

  return query.find()
}

export function installOk(id) {
  const automation = AV.Object.createWithoutData('Automation', id);

  automation.increment('installations', 1)
  
  return automation.save(null, {
    fetchWhenSave: true
  })
}