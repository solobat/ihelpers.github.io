import AV from 'leancloud-storage'

const Installations = AV.Object.extend('Installations');

export const installationsService = {
  item,
  create
}

function item() {

}

function create(automation) {
  const installations = new Installations()

  return installations.save().then(() => {
    automation.set('installations', installations)
    
    return automation.save()
  })
}