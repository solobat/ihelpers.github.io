import AV from 'leancloud-storage'
import { installationsService } from './installation.service';
import { setACL } from '../helpers/av.helper'

const Automation = AV.Object.extend('Automation');

export const automationService = {
  list,
  listOfAuthor,
  updateOne,
  item
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
  query.descending('updatedAt');
  query.include('author')
  query.include('installations')

  return query.find()
}

export function listOfAuthor(uid) {
  const query = new AV.Query('Automation');

  query.equalTo('author', AV.Object.createWithoutData('User', uid))
  query.include('author')
  query.include('installations')

  return query.find()
}

export function item(id) {
  const query = new AV.Query('Automation');

  query.include('author')
  query.include('installations')

  return query.get(id)
}

export function installOk(id) {
  const installations = AV.Object.createWithoutData('Installations', id);

  installations.increment('count', 1)
  
  return installations.save(null, {
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
  const { instructions, pattern, name, intro, type, video } = attrs 
  const automation = new Automation();
  automation.set('instructions', instructions)
  automation.set('pattern', pattern)
  automation.set('name', name)
  automation.set('intro', intro)
  automation.set('video', video)
  automation.set('type', type)
  automation.set('author', AV.User.current())
  setACL(automation)

  return automation.save().then((automation) => {
    return installationsService.create(automation)
  })
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

export function updateOne(id, attrs) {
  const automation = AV.Object.createWithoutData('Automation', id)
  const { instructions, pattern, name, intro, type, video } = attrs 

  automation.set('instructions', instructions)
  automation.set('pattern', pattern)
  automation.set('name', name)
  automation.set('intro', intro)
  automation.set('video', video)
  automation.set('type', type)
  automation.increment('version', 1)

  return automation.save()
}