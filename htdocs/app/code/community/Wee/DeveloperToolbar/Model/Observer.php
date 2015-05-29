<?php

class Wee_DeveloperToolbar_Model_Observer
{
    public function addWeeDeveloperToolbarHandle(Varien_Event_Observer $observer) {
        if (Mage::getStoreConfigFlag('advanced/modules_disable_output/Wee_DeveloperToolbar')
            || (Mage::app()->useCache('full_page') && ! Mage::app()->getStore()->isAdmin())) {
            return;
        }

        /** @var Mage_Core_Model_Layout_Update $update */
        $update = Mage::getSingleton('core/layout')->getUpdate();
        $update->addHandle('wee_developertoolbar');
    }
}
