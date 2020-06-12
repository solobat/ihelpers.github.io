import AV from 'leancloud-storage'

const Automation = AV.Object.extend('Automation');

export const automationService = {
  list,
  listOfAuthor
}

export function list(action, searchText) {
  const query = new AV.Query('Automation');
  // query.equalTo('status', 2);

  if (action) {
    query.equalTo('type', action)
  }

  if (searchText) {
    query.contains('name', searchText);
  }
  query.include('author')

  return query.find()
}

export function listOfAuthor(uid) {
  const query = new AV.Query('Automation');

  query.equalTo('author', AV.Object.createWithoutData('User', uid))
  query.include('author')

  return query.find()
}

export function installOk(id) {
  const automation = AV.Object.createWithoutData('Automation', id);

  automation.increment('installations', 1)
  
  return automation.save(null, {
    fetchWhenSave: true
  })
}

export function isExisted(instructions, pattern) {
  const query = new AV.Query('Automation');

  query.equalTo('instructions', instructions)
  query.equalTo('pattern', pattern)

  return query.first().then(item => {
    return Boolean(item)
  })
}

function create(attrs) {
  const { instructions, pattern, name, intro, type, } = attrs 
  const automation = new Automation();
  automation.set('instructions', instructions)
  automation.set('pattern', pattern)
  automation.set('name', name)
  automation.set('intro', intro)
  automation.set('type', type)
  automation.set('author', AV.User.current())

  return automation.save()
}

export function addOne(attrs) {
  const { instructions, pattern, } = attrs

  return isExisted(instructions, pattern).then(existed => {
    if (!existed) {
      return create(attrs)
    } else {
      return Promise.reject('Automation has existed')
    }
  })
}