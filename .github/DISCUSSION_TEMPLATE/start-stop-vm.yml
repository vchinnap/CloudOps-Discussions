name: "VM Start/Stop Request"
description: "Request to start or stop a virtual machine by providing VM details."
title: "[VM Start/Stop Request]"
labels: ["Provision"]
body:
  - type: markdown
    attributes:
      value: |
        ### VM Start/Stop Request
        Please fill in the details below to request a change in the VM power status.

  - type: input
    id: vm_name
    attributes:
      label: VM Name
      description: "Enter the name of the virtual machine you want to control"
      placeholder: "e.g., MyVirtualMachine"
      required: true

  - type: input
    id: resource_group_name
    attributes:
      label: Resource Group Name
      description: "Enter the resource group that contains the virtual machine"
      placeholder: "e.g., MyResourceGroup"
      required: true

  - type: dropdown
    id: power_status
    attributes:
      label: Power Status
      description: "Choose the desired power status for the VM"
      options:
        - start
        - stop
      required: true

  - type: textarea
    id: justification
    attributes:
      label: Justification
      description: "Provide a reason for starting or stopping the VM"
      placeholder: "e.g., Testing server readiness for deployment."
      required: true
